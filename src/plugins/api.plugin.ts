import KeyConst from "@/const/key.const";
import Fetch from "@/core/fetch.core";
import type { HttpRequestInit } from "@/types/fetch";
import { getCookies } from "@/helpers/storage.helper";

export class Api extends Fetch {}

export class AuthApi extends Fetch {
  protected onBeforeSend(configs: HttpRequestInit): HttpRequestInit {
    const token: string | null = getCookies(KeyConst.KEY_ACCESS_TOKEN);
    if (token) {
      configs.headers.append("Authorization", "Bearer " + token);
    } else {
      console.warn("Access Token cannot be NULL");
    }
    return configs;
  }
}
