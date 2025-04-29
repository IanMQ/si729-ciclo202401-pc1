export class Country {
  country_name: string;
  iso_3166: string;
  total_holidays: number;
  supported_languages: number;
  uuid: string;
  flag_unicode: string;

  constructor(
    country_name: string = "",
    iso_3166: string = "",
    total_holidays: number = 0,
    supported_languages: number = 0,
    uuid: string = "",
    flag_unicode: string = ""
  ) {
    this.country_name = country_name;
    this.iso_3166 = iso_3166;
    this.total_holidays = total_holidays;
    this.supported_languages = supported_languages;
    this.uuid = uuid;
    this.flag_unicode = flag_unicode;
  }

  // Método estático para mapear un objeto JSON a una instancia de Country
  static fromJson(json: any): Country {
    return new Country(
      json["country_name"] || "",
      json["iso-3166"] || "",
      json["total_holidays"] || 0,
      json["supported_languages"] || 0,
      json["uuid"] || "",
      json["flag_unicode"] || ""
    );
  }
}
