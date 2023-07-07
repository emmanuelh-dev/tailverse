import React, { useState, useEffect, useRef } from "react";
import QRious from "qrious";

const QRGenerator = () => {
  const [type, setType] = useState("text");
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [wifiData, setWifiData] = useState({
    ssid: "",
    password: "",
    authentication: "WPA",
  });
  const [text, setText] = useState("");
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    const generateQRCode = () => {
      const formattedData = formatData();
      const qr = new QRious({
        element: qrCanvasRef.current,
        value: formattedData,
        size: 200,
        level: "H",
        backgroundAlpha: 1,
        foreground: "black",
        foregroundAlpha: 1,
      });
    };

    generateQRCode();
  }, [contactData, wifiData]);

  const handleInputChange = (e) => {
    if (type === "contact") {
      setContactData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else if (type === "wifi") {
      setWifiData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSelectChange = (e) => {
    setType(e.target.value);
    resetData();
  };

  const resetData = () => {
    setContactData({
      name: "",
      phone: "",
      email: "",
    });
    setWifiData({
      ssid: "",
      password: "",
      authentication: "WPA",
    });
  };

  const formatData = () => {
    switch (type) {
      case "text":
        return "";
      case "contact":
        // Formatear los datos de contacto según el estándar vCard
        const { name, phone, email } = contactData;
        return `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
      case "wifi":
        // Formatear los datos de WiFi según el formato: SSID;PASSWORD;AUTHENTICATION
        const { ssid, password, authentication } = wifiData;
        return `WIFI:T:${authentication};S:${ssid};P:${password};;`;
      default:
        return "";
    }
  };

  return (
    <div class="p-4">
      <div className="md:flex md:grid-cols-2 items-center justify-center min-h-screen">
        <div className="md:flex md:w-1/2 items-center justify-center flex-col">
          <div class="mb-4">
            <label class="mr-2" htmlFor="type-select">
              Tipo:
            </label>
            <select
              class="border rounded p-1"
              id="type-select"
              value={type}
              onChange={handleSelectChange}
            >
              <option value="text">Texto</option>
              <option value="contact">Contacto</option>
              <option value="wifi">WiFi</option>
            </select>
          </div>
          {type === "contact" && (
            <div class="mb-4 flex flex-col">
              <input
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <input
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                type="text"
                name="phone"
                value={contactData.phone}
                onChange={handleInputChange}
                placeholder="Teléfono"
              />
              <input
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                type="text"
                name="email"
                value={contactData.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
              />
            </div>
          )}
          {type === "wifi" && (
            <div class="mb-4 flex flex-col">
              <input
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                type="text"
                name="ssid"
                value={wifiData.ssid}
                onChange={handleInputChange}
                placeholder="SSID"
              />
              <input
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                type="password"
                name="password"
                value={wifiData.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
              />
              <select
                class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                name="authentication"
                value={wifiData.authentication}
                onChange={handleInputChange}
              >
                <option value="WPA">WPA</option>
                <option value="WEP">WEP</option>
                <option value="None">None</option>
              </select>
            </div>
          )}
          {type === "text" && (
            <input
              class="border border-black bg-white text-black rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              type="text"
              name="name"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Nombre"
            />
          )}
        </div>
        <div className="md:w-1/2 items-center md:flex justify-center">
          <canvas className="border" ref={qrCanvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
