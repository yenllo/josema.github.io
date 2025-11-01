import { PrismaClient, ProductCategory, WorkshopStatus, ProductStatus } from '@prisma/client';

const prisma = new PrismaClient();

const seedWorkshops = [
  {
    title: 'TALLER MIÉRCOLES PM',
    description: 'Un espacio para desconectarte del ruido diario, crear y disfrutar...',
    price: 120000,
    date: new Date(),
    schedule: 'Miércoles 19:00 a 22:00 pm',
    classCount: 4,
    maxCapacity: 5,
    location: 'San Carlos de Apoquindo / Las Condes',
    status: WorkshopStatus.disponible,
    materialsIncluded: true,
  },
];

const seedProducts = [
  {
    name: 'CASITAS DE LUZ',
    description: 'Una hermosa casita de luz para decorar tu hogar.',
    price: 35000,
    stockQuantity: 10,
    category: ProductCategory.Decoración,
    sku: 'LBC-DEC-CAS01',
    weight_kg: 1.5,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 10,
        width: 10,
        height: 15,
      },
    },
  },
  {
    name: 'CANDELABROS ESTRELLA BLANCA',
    description: 'Candelabros con forma de estrella para iluminar tus noches.',
    price: 35000,
    stockQuantity: 8,
    category: ProductCategory.Decoración,
    sku: 'LBC-DEC-CAN01',
    weight_kg: 0.8,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 12,
        width: 12,
        height: 5,
      },
    },
  },
  {
    name: 'NACIMIENTO',
    description: 'Un hermoso nacimiento para celebrar la navidad.',
    price: 38000,
    stockQuantity: 5,
    category: ProductCategory.Decoración,
    sku: 'LBC-DEC-NAC01',
    weight_kg: 2.0,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 20,
        width: 15,
        height: 10,
      },
    },
  },
  {
    name: 'JARRO AGUA',
    description: 'Un jarro de agua de cerámica hecho a mano.',
    price: 29900,
    stockQuantity: 12,
    category: ProductCategory.Vajilla,
    sku: 'LBC-VAJ-JAR01',
    weight_kg: 1.2,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 15,
        width: 10,
        height: 20,
      },
    },
  },
  {
    name: 'TAZA TIERRA',
    description: 'Una taza de cerámica para disfrutar de tu café o té.',
    price: 45500,
    stockQuantity: 15,
    category: ProductCategory.Vajilla,
    sku: 'LBC-VAJ-TAZ01',
    weight_kg: 0.5,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 8,
        width: 8,
        height: 10,
      },
    },
  },
  {
    name: 'COLLAR DE CORAZÓN BLANCO',
    description: 'Un delicado collar con un corazón de porcelana.',
    price: 18500,
    stockQuantity: 20,
    category: ProductCategory.Joyería,
    sku: 'LBC-JOY-COL01',
    weight_kg: 0.1,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 2,
        width: 2,
        height: 0.5,
      },
    },
  },
  {
    name: 'PUNTO DE PORCELANA - 10mm',
    description: 'Un punto de porcelana para tus creaciones de joyería.',
    price: 15500,
    stockQuantity: 25,
    category: ProductCategory.Joyería,
    sku: 'LBC-JOY-PUN01',
    weight_kg: 0.05,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 1,
        width: 1,
        height: 1,
      },
    },
  },
  {
    name: 'ALAS',
    description: 'Unas alas de cerámica para colgar en la pared.',
    price: 22500,
    stockQuantity: 7,
    category: ProductCategory.Decoración,
    sku: 'LBC-DEC-ALA01',
    weight_kg: 1.8,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.publicado,
    dimension: {
      create: {
        length: 25,
        width: 10,
        height: 5,
      },
    },
  },
  {
    name: 'HORNO CERÁMICO',
    description: 'Un horno de cerámica para tus proyectos más grandes.',
    price: 29900,
    stockQuantity: 0,
    category: ProductCategory.Otros,
    sku: 'LBC-OTR-HOR01',
    weight_kg: 50,
    images: 'image1.jpg,image2.jpg',
    status: ProductStatus.agotado,
    dimension: {
      create: {
        length: 100,
        width: 80,
        height: 120,
      },
    },
  },
];

async function main() {
  console.log('Start seeding...');
  for (const workshop of seedWorkshops) {
    const result = await prisma.workshop.create({
      data: workshop,
    });
    console.log(`Created workshop with id: ${result.id}`);
  }
  for (const product of seedProducts) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${result.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
