diffrence=0;
rightWristX = 0;
leftWristX = 0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);



    canvas = createCanvas(550, 550);
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

    function draw()
    {
        background('#969A97')
        document.getElementById("font_size").innerHTML = "Width And Height of a Font will be = " + diffrence +"px";

    }

    function modelLoaded()
    {
        console.log('PoseNet is Initialized!');


    }

    function gotPoses(results)
        {
            if(results.length > 0)
            {
                console.log(results);
                leftWristX = results[0].pose.leftWrist.x;
                rightWristX = results[0].pose.rightWrist.x;
                diffrence =floor(leftWristX - rightWristX);
                console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "diffrence = " + diffrence);
            }

        }

        

    