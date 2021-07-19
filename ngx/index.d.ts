import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Fake Location
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FakeLocation } from '@ionic-native/fake-location';
 *
 *
 * constructor(private fakeLocation: FakeLocation) { }
 *
 * ...
 *
 *
 * this.fakeLocation.check(config)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class FakeLocation extends IonicNativePlugin {
    /**
     * This function does something
     * @param config {JSONArray} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    check(config: {
        [s: string]: any;
    }): Promise<any>;
}
