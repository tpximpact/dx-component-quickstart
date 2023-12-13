import mime from 'mime';
/**
 * @param fileName
 * @returns string : mime-type from file extension | default string value
 */
export default function getMimeType(fileName: string): string {
  const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1);
  let mimeType = mime.getType(fileExt);

  if (mimeType === null) {
    mimeType = 'No mime type';
  }

  return mimeType;
}
