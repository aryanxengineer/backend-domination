import sharp from "sharp";

class SharpService {
  async resizeImage(
    buffer: Buffer,
    width: number,
    height: number
  ): Promise<Buffer> {
    return await sharp(buffer).resize(width, height).toBuffer();
  }
}

export default new SharpService();
