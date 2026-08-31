// Ejercicio Factory: Sistema de Notificaciones
// Contexto: Una aplicación necesita enviar notificaciones a los usuarios por diferentes canales (email, SMS, push). Cada canal tiene características propias y costos diferentes. La fábrica debe crear el notificador correcto según el canal solicitado.

// Requisitos:

// Define una interfaz Notificacion que tenga:

// Propiedades: destinatario, mensaje, prioridad

// Métodos: enviar() que devuelva un string con la confirmación

// Método: calcularCosto() que devuelva un número

// Crea 3 clases que implementen Notificacion:

// EmailNotificacion - costo base: $0.50

// SMSNotificacion - costo base: $1.20

// PushNotificacion - costo base: $0.10

// Crea una clase FabricaNotificaciones que:

// Reciba el tipo de notificación ("email", "sms", "push")

// Reciba destinatario, mensaje y prioridad

// Devuelva la notificación correcta

// Ejemplo de uso esperado:

const fabrica = new FabricaNotificaciones();

const email = fabrica.crearNotificacion("email", "ana@mail.com", "Hola", "alta");
console.log(email.enviar());
// "Enviando Email a ana@mail.com: Hola (prioridad: alta)"
console.log(email.calcularCosto());
// 0.5

const sms = fabrica.crearNotificacion("sms", "+123456789", "Tu pedido llegó", "media");
console.log(sms.enviar());
// "Enviando SMS a +123456789: Tu pedido llegó (prioridad: media)"
console.log(sms.calcularCosto());
// 1.2

const push = fabrica.crearNotificacion("push", "usuario123", "Nuevo mensaje", "baja");
console.log(push.enviar());
// "Enviando Push a usuario123: Nuevo mensaje (prioridad: baja)"
console.log(push.calcularCosto());
// 0.1