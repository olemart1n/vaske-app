interface Bus {
  // name: string;
  number: number;
  engine: string;
  brand: string;
  slug: string;
  length: 12 | 18 | 24;
  status: Status;
}

interface Status {
  isWashed: boolean;
  isInTraffic: boolean;
}

const busList: Bus[] = [];

export const slugs = [
  "Volvo El", // 0
  "MAN.El", // 1
  "Vanhool", // 2
  "Diesel-ledd", // 3
  "Gass-ledd", // 4
  "12.M.MAN", // 5
  "MAN El-Ledd", // 6
  "Heluiez", // 7
  "Volvo Diesel", // 8
  "MAN-Diesel", // 9
];
// METRO 2
for (let index = 8701; index <= 8714; index++) {
  busList.push({
    brand: "Vanhool",
    number: index,
    engine: "Diesel",
    slug: slugs[2],
    length: 24,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.1,
    },
  });
}

// Vovlo El 0
for (let index = 8720; index <= 8745; index++) {
  busList.push({
    brand: "Volvo",
    number: index,
    engine: "El",
    slug: slugs[0],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// MAN El 1
for (let index = 8746; index <= 8749; index++) {
  busList.push({
    brand: "Man",
    number: index,
    engine: "El",
    slug: slugs[1],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}

// Vovlo Diesel 8
for (let index = 8750; index <= 8755; index++) {
  busList.push({
    brand: "Volvo",
    number: index,
    engine: "Diesel",
    slug: slugs[8],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}

// Man Diesel 9
for (let index = 8756; index <= 8757; index++) {
  busList.push({
    brand: "Man",
    number: index,
    engine: "Diesel",
    slug: slugs[9],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}

// Heluiez
for (let index = 8760; index <= 8770; index++) {
  busList.push({
    brand: "Heluiez",
    number: index,
    engine: "Diesel",
    slug: slugs[7],
    length: 18,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// Man El Ledd
for (let index = 8771; index <= 8779; index++) {
  busList.push({
    brand: "Man",
    number: index,
    engine: "Diesel",
    slug: slugs[6],
    length: 18,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// 12M MAN
for (let index = 8780; index <= 8799; index++) {
  busList.push({
    brand: "Man",
    number: index,
    engine: "Gass",
    slug: slugs[5],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// 12M MAN
for (let index = 8801; index <= 8819; index++) {
  if (index === 8818) break;
  busList.push({
    brand: "Man",
    number: index,
    engine: "Gass",
    slug: slugs[5],
    length: 12,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// MAN gass-ledd
for (let index = 8825; index <= 8841; index++) {
  busList.push({
    brand: "Man",
    number: index,
    engine: "Gass",
    slug: slugs[4],
    length: 18,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
// Volvo Diesel-ledd
for (let index = 8845; index <= 8874; index++) {
  busList.push({
    brand: "Volvo",
    number: index,
    engine: "Diesel",
    slug: slugs[3],
    length: 18,
    status: {
      isWashed: Math.random() < 0.5,

      isInTraffic: Math.random() < 0.5,
    },
  });
}
export { busList, type Bus };
