import KeyConst from "@/const/key.const";
import Fetch, { type HttpRequestInit } from "@/core/fetch.core";
import StorageHelper from "@/helpers/storage.helper";

export class Api extends Fetch {}

export class AuthApi extends Fetch {
  protected onBeforeSend(configs: HttpRequestInit): HttpRequestInit {
    const token: string | null = StorageHelper.getCookies(KeyConst.KEY_ACCESS_TOKEN);
    if (token) {
      configs.headers.append("Authorization", "Bearer " + token);
    } else {
      console.warn("Access Token cannot be NULL");
    }
    return configs;
  }
}
