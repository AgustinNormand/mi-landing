// Datos legales del titular. Meta (verificación del negocio) los compara con la
// constancia de ARCA, así que tienen que coincidir con ella letra por letra.
export const LEGAL = {
	marca: "PiranhaSoftware",
	titular: "Agustín Normand",
	cuit: "20-41677293-3", // completar con el de la constancia de ARCA (formato 20-12345678-9)
	email: "contacto@piranhasoftware.com.ar",
	ciudad: "Buenos Aires, Argentina",
	actualizado: "20 de octubre de 2026",
};

if (!/^\d{2}-\d{8}-\d$/.test(LEGAL.cuit)) {
	throw new Error("Falta el CUIT en src/legal.ts (formato 20-12345678-9).");
}
