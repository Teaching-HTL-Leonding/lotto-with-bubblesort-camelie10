import p5 from 'p5';

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.draw = draw;
  sketch.mouseClicked = mouseClicked;
});

let lottonums = getNum();

function setup() {
  bubbleSort(lottonums);
  bubbleSort(getNum());
  p.createCanvas(850, 400);
  p.background('grey');
}

function mouseClicked() {
  if (
    p.mouseX > p.width / 2 - 90 / 2 &&
    p.mouseX < p.width / 2 + 90 / 2 &&
    p.mouseY > (p.height / 4) * 3 - 30 / 2 &&
    p.mouseY < (p.height / 4) * 3 + 30 / 2
  ) {
    lottonums = getNum();
    bubbleSort(lottonums);
  }
  console.log(lottonums);
}
function draw() {
  p.textSize(50);
  p.textAlign(p.CENTER, p.CENTER);
  for (let i = 0; i < lottonums.length; i++) {
    p.stroke('black');
    p.fill(i < lottonums.length - 1 ? 'white' : 'red');
    p.circle(110 * i + 75, p.height / 2, 90);
    p.fill('black');
    p.noStroke();
    p.text(lottonums[i], 110 * i + 75, p.height / 2);
  }
  p.fill('green');
  p.rect(p.width / 2 - 90 / 2, (p.height / 4) * 3, 90, 30);
  p.fill('black');
  p.textSize(15);

  p.text('Reroll', p.width / 2, (p.height / 4) * 3 + 30 / 2);
}

function bubbleSort(numbers: number[]) {
  let swapped: boolean;
  let numofSwitches = 0;
  do {
    swapped = false;
    for (let i = 0; i < numbers.length - 1 - numofSwitches; i++) {
      const j = i + 1;
      if (numbers[j] < numbers[i]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        swapped = true;
      }
    }
    numofSwitches++;
  } while (swapped);
}

function getNum(): number[] {
  let numbers: number[] = [];
  let lottonums: number[] = [];
  for (let i = 0; i < 45; i++) {
    numbers.push(i);
  }
  for (let i = 0; i < 7; i++) {
    const index = Math.floor(p.random(0, numbers.length));
    lottonums.push(numbers.splice(index, 1)[0]);
  }
  return lottonums;
}
