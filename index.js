import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");
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
