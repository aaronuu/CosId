/*
 * Copyright [2021-present] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package me.ahoo.cosid.test.snowflake.machine.distributor;

import static me.ahoo.cosid.test.snowflake.machine.distributor.MachineIdDistributorSpec.TEST_MACHINE_BIT;
import static me.ahoo.cosid.test.snowflake.machine.distributor.MachineIdDistributorSpec.allInstances;
import static me.ahoo.cosid.test.snowflake.machine.distributor.MachineIdDistributorSpec.mockInstance;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

import me.ahoo.cosid.snowflake.machine.InstanceId;
import me.ahoo.cosid.snowflake.machine.MachineIdDistributor;
import me.ahoo.cosid.snowflake.machine.MachineIdOverflowException;
import me.ahoo.cosid.test.Assert;
import me.ahoo.cosid.test.MockIdGenerator;
import me.ahoo.cosid.test.TestSpec;

import java.time.Duration;
import java.util.List;
import java.util.function.Function;
import java.util.function.Supplier;

/**
 * DistributeIdempotent .
 * Multiple assignments to the same instance are idempotent.
 *
 * @author ahoo wang
 */
public class DistributeIdempotent implements TestSpec {
    
    public static final Duration SAFE_GUARD_DURATION = Duration.ofSeconds(5);
    private final Supplier<MachineIdDistributor> implFactory;
    
    public DistributeIdempotent(Supplier<MachineIdDistributor> implFactory) {
        this.implFactory = implFactory;
    }
    
    @Override
    public void verify() {
        MachineIdDistributor distributor = implFactory.get();
        
        String namespace = MockIdGenerator.usePrefix("DistributeSafeGuard").generateAsString();
        
        List<InstanceId> allInstances = allInstances(TEST_MACHINE_BIT, false);
        assertThat(allInstances, hasSize(MachineIdDistributor.totalMachineIds(TEST_MACHINE_BIT)));
        
        for (int i = 0; i < allInstances.size(); i++) {
            int machineId = distributor.distribute(namespace, TEST_MACHINE_BIT, allInstances.get(i), SAFE_GUARD_DURATION).getMachineId();
            assertThat(machineId, equalTo(i));
        }
        
        InstanceId overflowInstanceId = mockInstance(MachineIdDistributor.totalMachineIds(TEST_MACHINE_BIT), false);
        Assert.assertThrows(MachineIdOverflowException.class, () -> {
            distributor.distribute(namespace, TEST_MACHINE_BIT, overflowInstanceId, SAFE_GUARD_DURATION);
        });
        
        for (int i = 0; i < allInstances.size(); i++) {
            int machineId = distributor.distribute(namespace, TEST_MACHINE_BIT, allInstances.get(i), SAFE_GUARD_DURATION).getMachineId();
            assertThat(machineId, equalTo(i));
        }
    }
}
