/* eslint-disable max-classes-per-file */

import Debug from 'debug';
import { ExtensionFactory, ExtensionDescriptor, Plugin } from '@flowscripter/esm-dynamic-plugins';
import ExtensionPointA, { EXTENSION_POINT_A_ID } from './ExtensionPointA';

const log = Debug('PluginA');

class ExtensionA implements ExtensionPointA {

    private readonly hostData: string;

    public constructor(hostData: string) {
        this.hostData = hostData;
    }

    public sayHello(): void {
        log(`Hello from PluginA and ExtensionA, host provided data is ${this.hostData} `);
    }
}

class ExtensionFactoryA implements ExtensionFactory {
    // eslint-disable-next-line class-methods-use-this
    public create(hostData: string): Promise<ExtensionA> {
        return Promise.resolve(new ExtensionA(hostData));
    }
}

export class ExtensionDescriptorA implements ExtensionDescriptor<string> {

    public extensionPointId: string = EXTENSION_POINT_A_ID;

    public factory: ExtensionFactory = new ExtensionFactoryA();

    public extensionData = 'Extension Descriptor A data';
}

export default class PluginA implements Plugin<string> {

    public extensionDescriptors: ExtensionDescriptor<string>[] = [
        new ExtensionDescriptorA()
    ];

    public pluginData = 'Plugin A data';
}
