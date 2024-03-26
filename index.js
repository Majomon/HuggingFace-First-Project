import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";
config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
const imageUrl =
  "https://th-thumbnailer.cdn-si-edu.com/VCycQRxu4QwTvPAUBNYSghlgwks=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Innovations-Dogs-Furry-Kids.jpg";

const model = "Salesforce/blip-image-captioning-large";
const response = await fetch(imageUrl);
const blob = await response.blob();

const result = await hf.imageToText({
  data: blob,
  model,
});

console.log(result);
