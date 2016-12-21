restcountries
=============

Get information about countries via a RESTful API (Node.JS Version)

## API

#### Get all the countries!
```
/api/v1/countries
```

#### Get available regions
```
/api/v1/regions
```


#### Get countries by Region
```
/api/v1/regions/:region_name

```
example : [/api/v1/region/asia](/api/v1/region/asia)


#### Get available Sub-regions
```
/api/v1/subregions
```


#### Get countries by Sub-region

```
/api/v1/subregions/:subregion_name

```
example : [/api/v1/subregion/Northern Europe](/api/v1/subregion/Northern Europe)



#### Get country by Currency

```
/api/v1/countries/currency/:current_code

```
example : [/api/v1/countries/currency/IDR](/api/v1/currency/IDR)



#### Get country by Calling Code

```
/api/v1/countries/callingcode/:calling_code

```
example : [/api/v1/countries/callingcode/60](/api/v1/countries/callingcode/60)


#### Get all currencies

```
/api/v1/currencies
```

#### Get one currency

```
/api/v1/currencies/:currency_code
```
example : /api/v1/currencies/COP


#### Get all languages available

```
/api/v1/langs
```

#### Get a lang

```
/api/v1/langs/:code
```
NOTE: The language code may be ISO 639-1 (ex:en) or ISO 639-2 (ex:eng)
Example: /api/v1/langs/fr

##### Get translations for this lang
```
/api/v1/langs/:code?translations=en,es,de
```
Gets different translations for the language with code specified. 
Translations is a comma separated string with ISO-639-1 codes

All the possible translations are the keys in the following object: (it means: aa, af, ak, am, ar ...)
```json
{
  "aa": "Spanish",
  "af": "Spaans",
  "ak": "Spanish [en]",
  "am": "ስፓኒሽ",
  "ar": "الأسبانية",
  "as": "Spanish [en]",
  "az": "ispanca",
  "be": "іспанская",
  "bg": "испански",
  "bm": "Spanish [en]",
  "bn": "স্পেনীয়",
  "bo": "ཞི་པན་ཡའི།",
  "br": "Spanish [en]",
  "bs": "španjolski",
  "ca": "espanyol",
  "cs": "španělština",
  "cy": "Sbaeneg",
  "da": "spansk",
  "de": "Spanisch",
  "dv": "Spanish [en]",
  "dz": "སིཔེ་ནིཤ",
  "ee": "Spanish [en]",
  "el": "Ισπανικά",
  "en": "Spanish",
  "eo": "hispana",
  "es": "español",
  "et": "hispaania",
  "eu": "espainiera",
  "fa": "اسپانیایی",
  "ff": "Spanish [en]",
  "fi": "espanja",
  "fo": "spanskt",
  "fr": "espagnol",
  "ga": "Spáinnis",
  "gl": "Español",
  "gu": "સ્પેનિશ",
  "gv": "Spanish [en]",
  "ha": "Mutanen Espanya",
  "he": "ספרדית",
  "hi": "स्पेनिश",
  "hr": "španjolski",
  "hu": "spanyol",
  "hy": "Իսպաներեն",
  "ia": "espaniol",
  "id": "Spanyol",
  "ig": "Spanish [en]",
  "ii": "ꑭꀠꑸꉙ",
  "in": "Spanyol",
  "is": "spænska",
  "it": "spagnolo",
  "iu": "Spanish [en]",
  "iw": "ספרדית",
  "ja": "スペイン語",
  "ka": "ესპანური",
  "ki": "Spanish [en]",
  "kk": "испан",
  "kl": "Spanish [en]",
  "km": "ភាសាអេស្ប៉ាញ",
  "kn": "ಸ್ಪ್ಯಾನಿಷ್",
  "ko": "스페인어",
  "ku": "Spanish [en]",
  "kw": "Spanish [en]",
  "ky": "испанча",
  "lg": "Spanish [en]",
  "ln": "lispanyola",
  "lo": "ແອສປາໂຍນ",
  "lt": "ispanų",
  "lv": "spāņu",
  "mg": "Spanish [en]",
  "mi": "Spanish [en]",
  "mk": "шпански",
  "ml": "സ്പാനിഷ്",
  "mn": "испани",
  "mo": "spaniolă",
  "mr": "स्पॅनिश",
  "ms": "Sepanyol",
  "mt": "Spanjol",
  "my": "စပိန်",
  "nb": "spansk",
  "nd": "Spanish [en]",
  "ne": "स्प्यानिश",
  "nl": "Spaans",
  "nn": "spansk",
  "no": "spansk",
  "nr": "Spanish [en]",
  "ny": "Spanish [en]",
  "oc": "espanhòl",
  "om": "Afaan Ispeen",
  "or": "ସ୍ପାନିସ୍",
  "pa": "ਸਪੇਨਿਸ਼",
  "pl": "hiszpański",
  "ps": "هسپانوي",
  "pt": "espanhol",
  "rm": "Spanish [en]",
  "ro": "spaniolă",
  "ru": "испанский",
  "rw": "Icyesipanyolo",
  "sa": "Spanish [en]",
  "se": "spánskkagiella",
  "sg": "Spanish [en]",
  "sh": "Španski",
  "si": "Spanish [en]",
  "sk": "španielčina",
  "sl": "španščina",
  "sn": "Spanish [en]",
  "so": "Isbaanish",
  "sq": "Spanjisht",
  "sr": "Шпански",
  "ss": "Spanish [en]",
  "st": "Spanish [en]",
  "sv": "spanska",
  "sw": "kihispania",
  "ta": "ஸ்பேனிஷ்",
  "te": "స్పానిష్",
  "tg": "Испанӣ",
  "th": "สเปน",
  "ti": "ስፓኒሽ",
  "tl": "Espanyol",
  "tn": "Spanish [en]",
  "to": "lea fakasepeni",
  "tr": "İspanyolca",
  "ts": "Spanish [en]",
  "tt": "Spanish [en]",
  "ug": "Spanish [en]",
  "uk": "іспанська",
  "ur": "ہسپانوی",
  "uz": "Испанча",
  "ve": "Spanish [en]",
  "vi": "Tiếng Tây Ban Nha",
  "wo": "Spanish [en]",
  "xh": "Spanish [en]",
  "yo": "Panyan",
  "zh": "西班牙文",
  "zu": "isiSpeyini"
}
```

##### Get all the translations for this lang
```
/api/v1/langs/:code?translations=all
```
Instead of asking for specific translations, you can choose to request all the different translations of the lang with the code specified


## Langs available

All langs available are listed in [here](http://data.okfn.org/data/core/language-codes/r/language-codes-full.json)
There's an interactive table with them in: [http://data.okfn.org/data/core/language-codes#resource-language-codes-full](http://data.okfn.org/data/core/language-codes#resource-language-codes-full)

There was made a modification in this source JSON file, before it looked like this:

```json
[
  {
    "alpha3-b":"aar", // ISO 639-2
    "alpha3-t":"",
    "alpha2":"aa", // ISO 639-1
    "English":"Afar", // CHANGE: English was changed to "en" 
    "French":"afar" // CHANGE: French was changed to "fr"
  }
]
```

### Langs translations

Got from [here](https://raw.githubusercontent.com/JumpLink/country-list/master/basic_languages.json)