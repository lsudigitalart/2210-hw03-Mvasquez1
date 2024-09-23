function setup()
{
  createCanvas(1000,1000);
  background(100);

}

function draw()
{
  var i = 0;
  for (var i = 5; i < width +10000; i += 10)
  {
    for (var j = 5; j < height; j += 10)
    {
    if (i < 10000)
    {
      //fill(random(225)); //greyscale
      fill(color(random(255), random(255), random(255))); //color
      ellipse(i, j, 111, 10);
    } else
    end;
    //continue;
    }
    } 
  }
//ctrl/shift/p 
//clone --paste link to git
//make new file