  // Zones from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const getTimezone = (timeZone = 'America/New_York') => {
  switch (timeZone) {
    case 'America/Argentina/Buenos_Aires':
    case 'America/Argentina/Catamarca':
    case 'America/Argentina/ComodRivadavia':
    case 'America/Argentina/Cordoba':
    case 'America/Argentina/Jujuy':
    case 'America/Argentina/La_Rioja':
    case 'America/Argentina/Mendoza':
    case 'America/Argentina/Rio_Gallegos':
    case 'America/Argentina/Salta':
    case 'America/Argentina/San_Juan':
    case 'America/Argentina/San_Luis':
    case 'America/Argentina/Tucuman':
    case 'America/Argentina/Ushuaia':
    case 'America/Buenos_Aires':
    case 'America/Catamarca':
    case 'America/Cordoba':
    case 'America/Jujuy':
    case 'America/Mendoza':
    case 'America/Rosario':
      // Argentina
      return 'America/Buenos_Aires';
    case 'America/Bahia_Banderas':
    case 'America/Cancun':
    case 'America/Chihuahua':
    case 'America/Ciudad_Juarez':
    case 'America/Ensenada':
    case 'America/Hermosillo':
    case 'America/Matamoros':
    case 'America/Mazatlan':
    case 'America/Merida':
    case 'America/Mexico_City':
    case 'America/Monterrey':
    case 'America/Ojinaga':
    case 'America/Santa_Isabel':
    case 'America/Tijuana':
    case 'Mexico/BajaNorte':
    case 'Mexico/BajaSur':
    case 'Mexico/General':
      // México
      return 'Mexico/General';
    case 'Africa/Ceuta':
    case 'Atlantic/Canary':
    case 'Europe/Madrid':
      // España
      return 'Europe/Madrid';
    case 'America/Lima':
      // Peru
      return 'America/Lima';
    case 'America/Bogota':
      // Colombia
      return 'America/Bogota';
    default:
      // East US
      return 'America/New_York';
  }
};

function formatDateToStringValid(string) {
  const replacesString = string.replaceAll('/', ' ');

  // Dividir la cadena de entrada en partes
  const [ day, month, year, time ] = replacesString.split(' ');

  // Mapear el número del mes a su nombre correspondiente
  const monthNames = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

  // Reemplazar el número del mes por su nombre
  const formattedMonth = monthNames[ month - 1 ];

  // Construir la nueva cadena de fecha con el nombre del mes
  const output = `${day} ${formattedMonth} ${year}, ${time}`;

  return output;
}

export const getBrowserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const getCurrentTimeInMilliseconds = (timezone) => {
  // Convertir la zona horaria a un identificador de zona horaria si es necesario
  const timezoneIdentifier = getTimezone(timezone);

  // Crear un objeto Date con la zona horaria deseada
  const now = new Date().toLocaleString(undefined, { timeZone: timezoneIdentifier });

  const formatDateString = formatDateToStringValid(now);

  // Utiliza toJSON para obtener una cadena de texto en formato ISO 8601
  const isNow = new Date(formatDateString);

  // Convertir la cadena ISO 8601 a mili segundos
  const timeInMilis = new Date(isNow).getTime();

  // Convertir el objeto Date a mili segundos
  return timeInMilis;
};
