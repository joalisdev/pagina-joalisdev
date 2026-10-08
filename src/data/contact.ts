export const WHATSAPP_NUMBER = "593986610794";
export const TIKTOK_URL = "https://www.tiktok.com/@joalisdev";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}