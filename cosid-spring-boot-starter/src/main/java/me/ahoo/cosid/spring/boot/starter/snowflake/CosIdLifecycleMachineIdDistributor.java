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

package me.ahoo.cosid.spring.boot.starter.snowflake;

import me.ahoo.cosid.snowflake.machine.InstanceId;
import me.ahoo.cosid.snowflake.machine.MachineIdDistributor;
import me.ahoo.cosid.spring.boot.starter.CosIdProperties;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.SmartLifecycle;

/**
 * CosId Lifecycle MachineIdDistributor.
 *
 * @author ahoo wang
 */
public class CosIdLifecycleMachineIdDistributor implements SmartLifecycle {
    private final CosIdProperties cosIdProperties;
    private final InstanceId instanceId;
    private final MachineIdDistributor machineIdDistributor;
    private volatile boolean running;

    public CosIdLifecycleMachineIdDistributor(CosIdProperties cosIdProperties,
                                              InstanceId instanceId,
                                              MachineIdDistributor machineIdDistributor) {
        this.cosIdProperties = cosIdProperties;
        this.instanceId = instanceId;
        this.machineIdDistributor = machineIdDistributor;
    }

    @Override
    public void start() {
        running = true;
    }

    @Override
    public void stop() {
        running = false;
        machineIdDistributor.revert(cosIdProperties.getNamespace(), this.instanceId);
    }

    @Override
    public boolean isRunning() {
        return running;
    }
}
