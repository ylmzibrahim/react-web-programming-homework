const api_url = "http://localhost:3002";
const site_url = "http://localhost:3001";

const lessons = [
  {
    _id: "627d9a89c770491212533b84",
    lesson: "matematik",
    class: "4",
    unit: "1",
    title: "Doğal Sayılar",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "matematik",
    class: "4",
    unit: "2",
    title: "Kesirler",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "matematik",
    class: "4",
    unit: "3",
    title: "Çevre Ölçme",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "fen-bilgisi",
    class: "4",
    unit: "1",
    title: "Doğal Sayılar",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "fen-bilgisi",
    class: "4",
    unit: "2",
    title: "Kesirler",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "fen-bilgisi",
    class: "4",
    unit: "3",
    title: "Çevre Ölçme",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "ingilizce",
    class: "4",
    unit: "1",
    title: "Doğal Sayılar",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "ingilizce",
    class: "4",
    unit: "2",
    title: "Kesirler",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
  {
    _id: "627d9a89c770491212533b84",
    lesson: "ingilizce",
    class: "4",
    unit: "3",
    title: "Çevre Ölçme",
    description:
      "Önce iki doğal sayının ne olduğunu hatırlayalım ve tanımını yapalım.\n\n Doğal sayılar: 0'dan 9'a kadar olan her bir sayıya doğal sayı denmektedir. Bu sayıları yan yana bir araya gelerek iki basamaklı ya da üç basamaklı ve dört basamaklı gibi sayıları oluştururuz.\n\n Geçen sene üç basamaklı sayıları öğrenmiştik. Bu sayıların en büyüğü 999 sayısıydı. Şimdi de 4 basamaklı ve beş basamaklı sayıları inceleyeceğiz ve bunlar hakkında bilgi alacağız.\n\n Dört Basamaklı Doğal Sayılar\n\n Adından da anlaşılacağı üzere 4 tane doğal sayıdan oluşan sayılara 4 basamaklı doğal sayılar denmektedir. Bu konuda en küçük doğal sayı 1000 sayısıdır. 1000 sayısı 999 sayısından sonra gelir. Yani üç basamaklı en büyük sayıdan sonra gelmektedir. Bunu şu şekilde gösterebiliriz;\n\n 999 + 1 = 1000\n\n",
  },
];

export default { api_url, site_url, lessons };
