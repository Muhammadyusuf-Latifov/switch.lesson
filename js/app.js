{
  // m - 1
  let day = 3;
  let weekName = "";
  switch (day) {
    case 1:
      weekName = "Monday";
      break;
    case 2:
      weekName = "Tuesday";
      break;
    case 3:
      weekName = "Wednesday";
      break;
    case 4:
      weekName = "Thursday";
      break;
    case 5:
      weekName = "Friday";
      break;
    case 6:
      weekName = "Saturday";
      break;
    case 7:
      weekName = "Sunday";
      break;
    default:
      weekName = "bunday kun mavjud emas.";
  }
  console.log(weekName);
}
{
  // m - 2
  let k = 5;
  let desc = "";
  switch (k) {
    case 1:
      desc = "yomon";
      break;
    case 2:
      desc = "qoniqarsiz";
      break;
    case 3:
      desc = "qoniqarli";
      break;
    case 4:
      desc = "yaxshi";
      break;
    case 5:
      desc = "a'lo";
      break;
    default:
      desc = "bunday baho mavjud emas";
  }
  console.log(desc);
}

{
  // m - 3
  let oy = 9;
  let fasl = "";
  switch (oy) {
    case 1:
    case 2:
    case 12:
      fasl = "qish";
      break;
    case 3:
    case 4:
    case 5:
      fasl = "bahor";
      break;
    case 6:
    case 7:
    case 8:
      fasl = "yoz";
      break;
    case 9:
    case 10:
    case 11:
      fasl = "kuz";
      break;
    default:
      fasl = "bunday oy mavjud emas";
  }
  console.log(fasl);
}

{
  // m - 4
  let oy = 8;
  let day = "";
  switch (oy) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = "31 kun";

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = "30 kun";
      break;
    case 2:
      day = "28 kun";
      break;
    default:
      day = "bunday oy mavjud emas";
  }
  console.log(day);
}

{
  // m - 5
  let amal = 2;
  let a = 4,
    b = 8;
  result = "";
  switch (amal) {
    case 1:
      result = a + b;
      break;
    case 2:
      result = a - b;
      break;
    case 3:
      result = a / b;
      break;
    case 4:
      result = a * b;
      break;
    default:
      result = "bunday amal mavjud emas";
  }
  console.log(result);
}
{
  // m - 6
  let long = 4;
  let qiymat = 1000;
  let metr = "";
  switch (long) {
    case 1:
      // ditsimetr
      metr = qiymat / 10;

      break;
    case 2:
      // kilometr
      metr = qiymat * 1000;
      break;
    case 3:
      // metr
      metr = qiymat;
      break;
    case 4:
      //   millimetr
      metr = qiymat / 1000;
      break;
    case 5:
      //   santimetr
      metr = qiymat / 100;
      break;
    default:
      metr = "bunday olchov mavjud birligi mavjud emas";
  }
  console.log(`${metr} metr`);
}

{
  // m - 7
  let weight = 4;
  let qiymat = 3;
  let kilo = "";
  switch (weight) {
    case 1:
      // kilogram
      kilo = qiymat;
      break;
    case 2:
      //  milligram
      kilo = qiymat / 1_000_000;
      break;
    case 3:
      // gramm
      kilo = qiymat / 1000;
      break;
    case 4:
      //   tonna
      kilo = qiymat * 1000;
      break;
    case 5:
      // sentner
      kilo = qiymat * 100;
  }
  console.log(`${kilo} kilogramm`);
}
