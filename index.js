import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";
config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

/* Para imagenes */
const imageUrl =
  "https://th-thumbnailer.cdn-si-edu.com/VCycQRxu4QwTvPAUBNYSghlgwks=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Innovations-Dogs-Furry-Kids.jpg";

const modelImg = "Salesforce/blip-image-captioning-large";

try {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const result = await hf.imageToText({
    data: blob,
    model: modelImg,
  });
  console.log(result);
} catch (error) {
  console.log(error);
}

const modelTranslate = "facebook/nllb-200-distilled-600M";

try {
  const result = await hf.translation({
    model: modelTranslate,
    inputs: "Hello world",
    parameters: {
      src_lang: "en",
      tgt_lang: "es",
    },
  });
  console.log(result);
} catch (error) {
  console.log(error);
}
