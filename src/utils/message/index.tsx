export const requiredFieldMessage = (fieldName: string) =>
	`${fieldName} tidak boleh kosong.`;
export const maxCharsMessage = (fieldName: string, maxChar: number) =>
	`${fieldName} tidak boleh lebih dari ${maxChar} karakter.`;

export const inValidPasswordMessage =
	"Password harus berupa Huruf Besar, Huruf Kecil, Angka dan Simbol.";
export const inValidEmailMessage = `Email hanya dapat mengandung huruf, angka, simbol, dan simbol '@'`;
export const invalidDomainMessage = `Hanya boleh huruf kecil dan simbol "-"`;
