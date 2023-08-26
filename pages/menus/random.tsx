import React from "react";

const Menu = () => {
  const menuSections = [
    {
      id: 1,
      title: "Tacos",
      items: [
        {
          id: 1,
          title: "Taco de carne asada",
          price: "$5",
          ingredients: "Carne asada, tortilla de maíz, cebolla, cilantro",
        },
        {
          id: 2,
          title: "Taco de pollo",
          price: "$4",
          ingredients: "Pollo, tortilla de maíz, lechuga, tomate, salsa",
        },
        // Agrega más elementos de la sección de tacos aquí
      ],
    },
    {
      id: 2,
      title: "Hamburguesas",
      items: [
        {
          id: 3,
          title: "Hamburguesa clásica",
          price: "$8",
          ingredients: "Carne de res, pan, lechuga, tomate, queso",
        },
        {
          id: 4,
          title: "Hamburguesa vegetariana",
          price: "$7",
          ingredients: "Patty vegetariana, pan, lechuga, tomate, cebolla",
        },
        // Agrega más elementos de la sección de hamburguesas aquí
      ],
    },
    {
      id: 3,
      title: "Entradas",
      items: [
        {
          id: 5,
          title: "Aros de cebolla",
          price: "$6",
          ingredients: "Cebolla, rebozado, salsa dip",
        },
        {
          id: 6,
          title: "Alitas de pollo",
          price: "$9",
          ingredients: "Pollo, salsa picante, apio, aderezo",
        },
        // Agrega más elementos de la sección de entradas aquí
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Menú del Restaurante</h1>
      {menuSections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.ingredients}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">{item.price}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
