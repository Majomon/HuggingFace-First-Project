import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");
const imageUrl =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F4f5aaece-3300-41a4-b2a8-ed2708a0a27c%2Fdomestic-dog_thumb_3x2.jpg&tbnid=4jW5XqDmt4pNBM&vet=12ahUKEwiZsfaGh5OFAxXAS7gEHZnbDNwQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&docid=VGirYKV8sLnrzM&w=3072&h=2048&q=dogs&ved=2ahUKEwiZsfaGh5OFAxXAS7gEHZnbDNwQMygCegQIARB1";

const model = "Salesforce/blip-image-captioning-large";
const response = await fetch(imageUrl);
const blob = response.blob();

const result = await hf.imageToText({
  data: blob,
  model,
});

console.log(result);
