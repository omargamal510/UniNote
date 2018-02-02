/*jslint plusplus: true, evil:true*/
/*global console, alert, prompt*/



document.onreadystatechange = function () {

    'use strict';
    var state = document.readyState;
    if (state === "complete") {
        setTimeout(function () {
            document.getElementById('load-screen').style.opacity = "0";
            setTimeout(function () {

                document.getElementById('load-screen').style.display = "none";
            }, 800);
        }, 1500);
    }
};



/* Start textWriter to the starting page */


var textWriterForStarting = "Welcome to University Note",

    countForStartingText = 0;

setTimeout(function () {
    
        'use strict';
    
        var typeWriter = setInterval(function () {
    
                document.getElementById('text-for-textwriter').textContent +=
                    textWriterForStarting[countForStartingText];
    
                countForStartingText++;
    
                if (countForStartingText > textWriterForStarting.length - 1) {
    
                    clearInterval(typeWriter);
    
                }
    
            }, 100);
    }, 1480); 

    
/* End textWriter to the starting page */





// upper place and bottom place and facilities ,,, faculties div holder ,,,, left side of the faculties button

var upperPlace = document.getElementById('upper-place'), // this is nav in HTML 
    backButtonIn = document.getElementById('back-button-in'),
    backButton = document.getElementById('back-button'),
    bottomPlace = document.getElementById('bottom-place'),
    facultiesButton = document.getElementById('faculties-button'),
    facultiesButtons = document.getElementById('faculties-buttons'),
    saButton = document.getElementById('sa-button'),
    saButtons = document.getElementById('sa-buttons'),
    facilitiesButton = document.getElementById('facilities-button'),
    restButton = document.getElementById('rest-button'),
    contactButton = document.getElementById('contact-button'),
    contactContent = document.getElementById('contact-content'),
    engineeringButton = document.getElementById('engineering-button'),
    medicineButton = document.getElementById('medicine-button'),
    oralDentalButton = document.getElementById('oral-dental-button'),
    fciButton = document.getElementById('fci-button'),
    pharmacyButton = document.getElementById('pharmacy-button'),
    agricultureButton = document.getElementById('agriculture-button'),
    scienceButton = document.getElementById('science-button'),
    politicalScienceButton = document.getElementById('political-science-button'),
    massMediaButton = document.getElementById('mass-media-button'),
    urbanButton = document.getElementById('urban-button');


// right side of faculties buttons

var commerceButton = document.getElementById('commerce-button'),
    tarbiaNawiaButton = document.getElementById('tarbia-nawia-button'),
    nursingButton = document.getElementById('nursing-button'),
    lawButton = document.getElementById('law-button'),
    physicalTherapyButton = document.getElementById('physical-therapy-button'),
    vetButton = document.getElementById('vet-button'),
    darUlumButton = document.getElementById('dar-ulum-button'),
    kinderGartenButton = document.getElementById('kindergarten-button'),
    archeologyButton = document.getElementById('archeology-button'),
    artsButton = document.getElementById('arts-button');



// divs that holds the the faculties content


// LEFT 



var engineeringContent = document.getElementById('engineering-content'),
    medicineContent = document.getElementById('medicine-content'),
    oralDentalContent = document.getElementById('oral-dental-content'),
    fciContent = document.getElementById('fci-content'),
    pharmacyContent = document.getElementById('pharmacy-content'),
    agricultureContent = document.getElementById('agriculture-content'),
    scienceContent = document.getElementById('science-content'),
    politicalScienceContent = document.getElementById('political-science-content'),
    massMediaContent = document.getElementById('mass-media-content'),
    urbanContent = document.getElementById('urban-content');



// Right

var commerceContent = document.getElementById('commerce-content'),
    tarbiaNawiaContent = document.getElementById('tarbianawia-content'),
    nursingContent = document.getElementById('nursing-content'),
    lawContent = document.getElementById('law-content'),
    physicalTherapyContent = document.getElementById('physical-content'),
    vetContent = document.getElementById('vet-content'),
    darUlumContent = document.getElementById('dar-content'),
    kinderGartenContent = document.getElementById('kindergarten-content'),
    archeologyContent = document.getElementById('archeology-content'),
    artsContent = document.getElementById('arts-content');



// Faculties Back button

var engBack = document.getElementById('eng-back'),
    medicineBack = document.getElementById('medicine-back'),
    oralDentalBack = document.getElementById('oral-dental-back'),
    fciBack = document.getElementById('fci-back'),
    pharmacyBack = document.getElementById('pharmacy-back'),
    agricultureBack = document.getElementById('agriculture-back'),
    scienceBack = document.getElementById('science-back'),
    politicalScienceBack = document.getElementById('political-science-back'),
    massMediaBack = document.getElementById('mass-media-back'),
    urbanBack = document.getElementById('urban-back'),


    commerceBack = document.getElementById('commerce-back'),
    tarbiaNawiaBack = document.getElementById('tarbianawia-back'),
    nursingBack = document.getElementById('nursing-back'),
    lawBack = document.getElementById('law-back'),
    physicalTherapyBack = document.getElementById('physical-back'),
    vetBack = document.getElementById('vet-back'),
    darUlumBack = document.getElementById('dar-back'),
    kinderGartenBack = document.getElementById('kindergarten-back'),
    archeologyBack = document.getElementById('archeology-back'),
    artsBack = document.getElementById('arts-back');




//------------------------



// sa buttons //

var enactusButton = document.getElementById('enactus-button'),
    cometButton = document.getElementById('comet-button'),
    treeButton = document.getElementById('tree-button'),
    xprojectButton = document.getElementById('xproject-button'),
    tshanjButton = document.getElementById('tshanj-button'),
    stpButton = document.getElementById('stp-button'),
    engBreakButton = document.getElementById('engbreak-button'),
    ieeeButton = document.getElementById('ieee-button'),
    fcesScButton = document.getElementById('fces-sc-button');


var mapButton = document.getElementById('map-button'),
    meseButton = document.getElementById('mese-button'),
    moicButton = document.getElementById('moic-button'),
    sencroButton = document.getElementById('sencro-button'),
    fekraButton = document.getElementById('fekra-button'),
    aisecButton = document.getElementById('aisec-button'),
    sahafaButton = document.getElementById('sahafa-button'),
    focusButton = document.getElementById('focus-button'),
    macButton = document.getElementById('mac-button');




// SA content 

var enactusContent = document.getElementById('enactus-content'),
    cometContent = document.getElementById('comet-content'),
    treeContent = document.getElementById('tree-content'),
    xprojectContent = document.getElementById('xproject-content'),
    tshanjContent = document.getElementById('tshanj-content'),
    stpContent = document.getElementById('stp-content'),
    engBreakContent = document.getElementById('engbreak-content'),
    ieeeContent = document.getElementById('ieee-content'),
    fcesScContent = document.getElementById('fces-sc-content');

var mapContent = document.getElementById('map-content'),
    meseContent = document.getElementById('mese-content'),
    moicContent = document.getElementById('moic-content'),
    sencroContent = document.getElementById('sencro-content'),
    fekraContent = document.getElementById('fekra-content'),
    aisecContent = document.getElementById('aisec-content'),
    sahafaContent = document.getElementById('sahafa-content'),
    focusContent = document.getElementById('focus-content'),
    macContent = document.getElementById('mac-content');





// SA back buttons 


var enactusBack = document.getElementById('enactus-back'),
    cometBack = document.getElementById('comet-back'),
    treeBack = document.getElementById('tree-back'),
    xprojectBack = document.getElementById('xproject-back'),
    tshanjBack = document.getElementById('tshanj-back'),
    stpBack = document.getElementById('stp-back'),
    engBreakBack = document.getElementById('engbreak-back'),
    ieeeBack = document.getElementById('ieee-back'),
    fcesScBack = document.getElementById('fces-sc-back');

var mapBack = document.getElementById('map-back'),
    meseBack = document.getElementById('mese-back'),
    moicBack = document.getElementById('moic-back'),
    sencroBack = document.getElementById('sencro-back'),
    fekraBack = document.getElementById('fekra-back'),
    aisecBack = document.getElementById('aisec-back'),
    sahafaBack = document.getElementById('sahafa-back'),
    focusBack = document.getElementById('focus-back'),
    macBack = document.getElementById('mac-back');




// Facilities Buttons //

var facilitiesButtons = document.getElementById('facilities-buttons');

var facil1Button = document.getElementById('facil1-button'),
    facil2Button = document.getElementById('facil2-button'),
    facil3Button = document.getElementById('facil3-button'),
    facil4Button = document.getElementById('facil4-button'),
    facil5Button = document.getElementById('facil5-button');



// Facilities Contents


var  facil1Content = document.getElementById('facil1-content'),
    facil2Content = document.getElementById('facil2-content'),
    facil3Content = document.getElementById('facil3-content'),
    facil4Content = document.getElementById('facil4-content'),
    facil5Content = document.getElementById('facil5-content'),


    // Facilities back 

	facil1Back = document.getElementById('facil1-back'),
    facil2Back = document.getElementById('facil2-back'),
    facil3Back = document.getElementById('facil3-back'),
    facil4Back = document.getElementById('facil4-back'),
    facil5Back = document.getElementById('facil5-back');




 //======================================================================================================






// show faculties buttons

facultiesButton.onclick = function () {

    'use strict';

    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    
    
};


backButton.onclick = function () {

    'use strict';

    backButton.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:none;');
    facilitiesButtons.setAttribute('style', 'display:none;');
    restButtons.setAttribute('style', 'display:none;');    

};

//=========================================



// show faculties content ======




engineeringButton.onclick = function () {

    'use strict';

    engineeringContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


engBack.onclick = function () {

    'use strict';


    engineeringContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);

};

//============





medicineButton.onclick = function () {

    'use strict';

    medicineContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


medicineBack.onclick = function () {

    'use strict';


    medicineContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);

};




//============

oralDentalButton.onclick = function () {

    'use strict';

    oralDentalContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


oralDentalBack.onclick = function () {

    'use strict';


    oralDentalContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};



//============

fciButton.onclick = function () {

    'use strict';

    fciContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


fciBack.onclick = function () {

    'use strict';


    fciContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};



//============


pharmacyButton.onclick = function () {

    'use strict';

    pharmacyContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


pharmacyBack.onclick = function () {

    'use strict';


    pharmacyContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};



//============



agricultureButton.onclick = function () {

    'use strict';

    agricultureContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


agricultureBack.onclick = function () {

    'use strict';


    agricultureContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};




//============

scienceButton.onclick = function () {

    'use strict';

    scienceContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


scienceBack.onclick = function () {

    'use strict';


    scienceContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};





//============

politicalScienceButton.onclick = function () {

    'use strict';

    politicalScienceContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


politicalScienceBack.onclick = function () {

    'use strict';


    politicalScienceContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};




//============

massMediaButton.onclick = function () {

    'use strict';

    massMediaContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


massMediaBack.onclick = function () {

    'use strict';


    massMediaContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};


//============

kinderGartenButton.onclick = function () {

    'use strict';

    kinderGartenContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


kinderGartenBack.onclick = function () {

    'use strict';


    kinderGartenContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};

//============

archeologyButton.onclick = function () {

    'use strict';

    archeologyContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


archeologyBack.onclick = function () {

    'use strict';


    archeologyContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};


//============

artsButton.onclick = function () {

    'use strict';

    artsContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


artsBack.onclick = function () {

    'use strict';


    artsContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};

//============

commerceButton.onclick = function () {

    'use strict';

    commerceContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


commerceBack.onclick = function () {

    'use strict';


    commerceContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};




//============

tarbiaNawiaButton.onclick = function () {

    'use strict';

    tarbiaNawiaContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


tarbiaNawiaBack.onclick = function () {

    'use strict';


    tarbiaNawiaContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};



//============

nursingButton.onclick = function () {

    'use strict';

    nursingContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


nursingBack.onclick = function () {

    'use strict';


    nursingContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};

//============

lawButton.onclick = function () {

    'use strict';

    lawContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


lawBack.onclick = function () {

    'use strict';


    lawContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};


//============

physicalTherapyButton.onclick = function () {

    'use strict';

    physicalTherapyContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


physicalTherapyBack.onclick = function () {

    'use strict';


    physicalTherapyContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};


//============

vetButton.onclick = function () {

    'use strict';

    vetContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


vetBack.onclick = function () {

    'use strict';


    vetContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};


//============

darUlumButton.onclick = function () {

    'use strict';

    darUlumContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


darUlumBack.onclick = function () {

    'use strict';

    darUlumContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);
};

//============

urbanButton.onclick = function () {

    'use strict';

    urbanContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    facultiesButtons.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);
};


urbanBack.onclick = function () {

    'use strict';


    urbanContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    facultiesButtons.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);

};

//============











//======================================================//======================================================//======================================================//==========================================================================
//======================================================//================================================================






// Show "SA" buttons

saButton.onclick = function () {

    'use strict';

    saButtons.setAttribute('style', 'display:block;');
    bottomPlace.setAttribute('style', 'display:none;');
    backButton.setAttribute('style', 'display:inline-block;');

};


//===========







// Show "SA" buttons Content


enactusButton.onclick = function () {

    'use strict';

    enactusContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0); 
};


enactusBack.onclick = function () {
    
    'use strict';
    
    enactusContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};






cometButton.onclick = function () {
        
    'use strict';
        
    cometContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0); 

};
          
cometBack.onclick = function () {
            
    'use strict';
            
    cometContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};




treeButton.onclick = function () {
        
    'use strict';
        
    treeContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
treeBack.onclick = function () {
            
    'use strict';
    
    treeContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};





xprojectButton.onclick = function () {
        
    'use strict';
        
    xprojectContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
xprojectBack.onclick = function () {
            
    'use strict';
    
    xprojectContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};




tshanjButton.onclick = function () {
        
    'use strict';
        
    tshanjContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
tshanjBack.onclick = function () {
            
    'use strict';
            
    tshanjContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};





stpButton.onclick = function () {
        
    'use strict';
        
    stpContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0); 

};
          
stpBack.onclick = function () {
            
    'use strict';
            
    stpContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};



engBreakButton.onclick = function () {
        
    'use strict';
        
    engBreakContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 

};
          
engBreakBack.onclick = function () {
            
    'use strict';
            
    engBreakContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};

          






fcesScButton.onclick = function () {
        
    'use strict';
        
    fcesScContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0); 
};
          
fcesScBack.onclick = function () {
            
    'use strict';
            
    fcesScContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};







mapButton.onclick = function () {
        
    'use strict';
        
    mapContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0); 
};
          
mapBack.onclick = function () {
            
    'use strict';
            
    mapContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};






meseButton.onclick = function () {
        
    'use strict';
        
    meseContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
meseBack.onclick = function () {
            
    'use strict';
            
    meseContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};




moicButton.onclick = function () {
        
    'use strict';
        
    moicContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
moicBack.onclick = function () {
            
    'use strict';
            
    moicContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};






fekraButton.onclick = function () {
        
    'use strict';
        
    fekraContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
fekraBack.onclick = function () {
            
    'use strict';
            
    fekraContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};




aisecButton.onclick = function () {
        
    'use strict';
        
    aisecContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
aisecBack.onclick = function () {
            
    'use strict';
            
    aisecContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};








focusButton.onclick = function () {
        
    'use strict';
        
    focusContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
focusBack.onclick = function () {
            
    'use strict';
            
    focusContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};






macButton.onclick = function () {
        
    'use strict';
        
    macContent.setAttribute('style', 'display:block;');
    saButtons.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style','display:none;');
    window.scrollTo(0, 0); 
};
          
macBack.onclick = function () {
            
    'use strict';
            
    macContent.setAttribute('style', 'display:none;');
    saButtons.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:block;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 

};









//======================================================//======================================================
//======================================================//======================================================
//======================================================//======================================================




// Show Facilities buttons 

facilitiesButton.onclick = function () {

    'use strict';

    facilitiesButtons.setAttribute('style', 'display:block;');
    bottomPlace.setAttribute('style', 'display:none;');
    backButton.setAttribute('style', 'display:inline-block;');
    window.scrollTo(0, 0); 
};


//----------




// Show and hide facilities content 


facil1Button.onclick = function () {
    
'use strict';
    
facil1Content.setAttribute('style', 'display:block;');
facilitiesButtons.setAttribute('style', 'display:none;');
upperPlace.setAttribute('style','display:none;');
window.scrollTo(0, 0); 
};
      
facil1Back.onclick = function () {
        
'use strict';
        
facil1Content.setAttribute('style', 'display:none;');
facilitiesButtons.setAttribute('style', 'display:block;');
upperPlace.setAttribute('style', 'display:block;');
backButton.setAttribute('style', 'display:inline-block;');
window.scrollTo(0, 0); 

};





facil2Button.onclick = function () {
    
'use strict';
    
facil2Content.setAttribute('style', 'display:block;');
facilitiesButtons.setAttribute('style', 'display:none;');
upperPlace.setAttribute('style','display:none;');
window.scrollTo(0, 0); 
};
      
facil2Back.onclick = function () {
        
'use strict';
        
facil2Content.setAttribute('style', 'display:none;');
facilitiesButtons.setAttribute('style', 'display:block;');
upperPlace.setAttribute('style', 'display:block;');
backButton.setAttribute('style', 'display:inline-block;');
window.scrollTo(0, 0); 
};





facil3Button.onclick = function () {
    
'use strict';
    
facil3Content.setAttribute('style', 'display:block;');
facilitiesButtons.setAttribute('style', 'display:none;');
upperPlace.setAttribute('style','display:none;');
window.scrollTo(0, 0); 
};
      
facil3Back.onclick = function () {
        
'use strict';
        
facil3Content.setAttribute('style', 'display:none;');
facilitiesButtons.setAttribute('style', 'display:block;');
upperPlace.setAttribute('style', 'display:block;');
backButton.setAttribute('style', 'display:inline-block;');
window.scrollTo(0, 0); 

};



facil4Button.onclick = function () {
    
'use strict';
    
facil4Content.setAttribute('style', 'display:block;');
facilitiesButtons.setAttribute('style', 'display:none;');
upperPlace.setAttribute('style','display:none;');
window.scrollTo(0, 0); 
};
      
facil4Back.onclick = function () {
        
'use strict';
        
facil4Content.setAttribute('style', 'display:none;');
facilitiesButtons.setAttribute('style', 'display:block;');
upperPlace.setAttribute('style', 'display:block;');
backButton.setAttribute('style', 'display:inline-block;');

window.scrollTo(0, 0); 
};






facil5Button.onclick = function () {
    
'use strict';
    
facil5Content.setAttribute('style', 'display:block;');
facilitiesButtons.setAttribute('style', 'display:none;');
upperPlace.setAttribute('style','display:none;');
window.scrollTo(0, 0); 
};
      
facil5Back.onclick = function () {
        
'use strict';
        
facil5Content.setAttribute('style', 'display:none;');
facilitiesButtons.setAttribute('style', 'display:block;');
upperPlace.setAttribute('style', 'display:block;');
backButton.setAttribute('style', 'display:inline-block;');

window.scrollTo(0, 0); 
};







/* ====================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================
*/               

                                                         // Restaurants


/* Start Teba */

var restButtons = document.getElementById('rest-buttons'),
tebaButton = document.getElementById('teba-button'),
safwaButton = document.getElementById('safwa-button'),
tebaSandwichInput = document.getElementById('teba-sandwich-input'),
tebaPizzaInput = document.getElementById('teba-pizza-input'),
tebaMacronInput = document.getElementById('teba-macron-input'),
tebaContent = document.getElementById('teba-content'),
tebaBack = document.getElementById('teba-back'),
tebaSandwichButton = document.getElementById('teba-sandwich-button'),
tebaPizzaButton = document.getElementById('teba-pizza-button'),
tebaMacronButton = document.getElementById('teba-macron-button'),
tebaSandwich = document.getElementById('teba-sandwich-content'),
tebaPizzaContent = document.getElementById('teba-pizza-content'),
tebaMacronContent = document.getElementById('teba-macron-content'),
tebaPriceHolder = document.getElementById('teba-price-holder'),
tebaSearch1 = document.getElementById('teba-search-1'),
tebaSearch2 = document.getElementById('teba-search-2'),
tebaSearch3 = document.getElementById('teba-search-3'),






tebaSandwichs = document.getElementById('sandwichs'),
tebaMeatSandwichs = document.getElementById('teba-meat-sandwichs'),
tebaChickenSandwichs = document.getElementById('teba-chicken-sandwichs'),
tebaSory = document.getElementById('teba-sory'),
tebaMiscellaneous = document.getElementById('teba-miscellaneous'),
tebaCreb = document.getElementById('teba-creb'),
tebaSha3biat = document.getElementById('teba-sha3biat');



// Teba prices 

tebaPrice2 = document.getElementById('teba-price-2'),
tebaPrice3 = document.getElementById('teba-price-3'),
tebaPrice4 = document.getElementById('teba-price-4'),
tebaPrice6 = document.getElementById('teba-price-6'),
tebaPrice7 = document.getElementById('teba-price-7'),
tebaPrice7_5 = document.getElementById('teba-price-75'),
tebaPrice8 = document.getElementById('teba-price-8'),
tebaPrice9 = document.getElementById('teba-price-9'),
tebaPrice10 = document.getElementById('teba-price-10'),
tebaPrice11 = document.getElementById('teba-price-11'),
tebaPrice12 = document.getElementById('teba-price-12'),
tebaPrice13 = document.getElementById('teba-price-13'),
tebaPrice14 = document.getElementById('teba-price-14'),
tebaPrice15 = document.getElementById('teba-price-15'),
tebaPrice16 = document.getElementById('teba-price-16'),
tebaPrice17 = document.getElementById('teba-price-17'),
tebaPrice18 = document.getElementById('teba-price-18'),
tebaPrice19 = document.getElementById('teba-price-19'),
tebaPrice20 = document.getElementById('teba-price-20'),
tebaPrice21 = document.getElementById('teba-price-21'),
tebaPrice22 = document.getElementById('teba-price-22'),
tebaPrice23 = document.getElementById('teba-price-23'),
tebaPrice25 = document.getElementById('teba-price-25'),
tebaPrice26 = document.getElementById('teba-price-26'),
tebaPrice28 = document.getElementById('teba-price-28');





// ===============================






// Show Restaurants buttons 

restButton.onclick = function () {
    bottomPlace.setAttribute('style', 'display:none;');
    restButtons.setAttribute('style','display:block;');
    backButton.setAttribute('style', 'display:inline;');
}                                        



// Show contnet of Teba 

 
tebaButton.onclick = function () {

    'use strict';

    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    restButtons.setAttribute('style', 'display:none;');
    tebaBack.setAttribute('style', 'display:inline;');
    tebaContent.setAttribute('style', 'display:block;');

    tebaSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');

};

tebaBack.onclick = function () {

    'use strict'; 

    upperPlace.setAttribute('style', 'display:block;');
    restButtons.setAttribute('style','display:block;');
    backButton.setAttribute('style', 'display:inline;');
    tebaContent.setAttribute('style', 'display:none;');

    tebaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
    tebaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
    tebaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');

    tebaSandwich.setAttribute('style', 'display:block;'); 
    tebaPizzaContent.setAttribute('style', 'display:none;');
    tebaMacronContent.setAttribute('style', 'display:none;');
    window.scrollTo(0, 0);

    tebaPrice2.setAttribute('style', 'display:none');
    tebaPrice3.setAttribute('style', 'display:none');
    tebaPrice4.setAttribute('style', 'display:none');
    tebaPrice6.setAttribute('style', 'display:none');
    tebaPrice7.setAttribute('style', 'display:none;');
    tebaPrice8.setAttribute('style', 'display:none;');
    tebaPrice9.setAttribute('style', 'display:none;');
    tebaPrice10.setAttribute('style', 'display:none;');
    tebaPrice11.setAttribute('style', 'display:none;');
    tebaPrice12.setAttribute('style', 'display:none;');
    tebaPrice13.setAttribute('style', 'display:none;');
    tebaPrice14.setAttribute('style', 'display:none;');
    tebaPrice15.setAttribute('style', 'display:none;');
    tebaPrice16.setAttribute('style', 'display:none;');
    tebaPrice17.setAttribute('style', 'display:none;');
    tebaPrice18.setAttribute('style', 'display:none;');
    tebaPrice19.setAttribute('style', 'display:none;');
    tebaPrice20.setAttribute('style', 'display:none;');
    tebaPrice21.setAttribute('style', 'display:none;');
    tebaPrice22.setAttribute('style', 'display:none;');
    tebaPrice23.setAttribute('style', 'display:none;');
    tebaPrice25.setAttribute('style', 'display:none;');
    tebaPrice26.setAttribute('style', 'display:none;');
    tebaPrice28.setAttribute('style', 'display:none;');

    
};

tebaSearch1.onfocus = function () {

    'use strict';

    this.setAttribute('placeholder', '');
};

tebaSearch1.onblur = function () {

    'use strict';

    this.setAttribute('placeholder', 'معاك كام ؟');
};

tebaSearch2.onfocus = function () {
    
    'use strict';
    
    this.setAttribute('placeholder', '');
};
    
tebaSearch2.onblur = function () {
        
    'use strict';
    
    this.setAttribute('placeholder', 'معاك كام ؟');
};


tebaSearch3.onfocus = function () {
        
    'use strict';
        
    this.setAttribute('placeholder', '');
};
        
tebaSearch3.onblur = function () {
            
    'use strict';
        
    this.setAttribute('placeholder', 'معاك كام ؟');
};


    


tebaSandwichButton.onclick = function () {
    
        'use strict';
    
        tebaSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
        tebaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
        tebaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');

        tebaSandwich.setAttribute('style', 'display:block;'); 
        tebaPizzaContent.setAttribute('style', 'display:none;');
        tebaMacronContent.setAttribute('style', 'display:none;');

        tebaSearch1.setAttribute('style', 'display:block;');
        tebaSearch2.setAttribute('style', 'display:none;');
        tebaSearch3.setAttribute('style', 'display:none;');

        tebaPrice2.setAttribute('style', 'display:none');
        tebaPrice3.setAttribute('style', 'display:none');
        tebaPrice4.setAttribute('style', 'display:none');
        tebaPrice6.setAttribute('style', 'display:none');
        tebaPrice7.setAttribute('style', 'display:none;');
        tebaPrice8.setAttribute('style', 'display:none;');
        tebaPrice9.setAttribute('style', 'display:none;');
        tebaPrice10.setAttribute('style', 'display:none;');
        tebaPrice11.setAttribute('style', 'display:none;');
        tebaPrice12.setAttribute('style', 'display:none;');
        tebaPrice13.setAttribute('style', 'display:none;');
        tebaPrice14.setAttribute('style', 'display:none;');
        tebaPrice15.setAttribute('style', 'display:none;');
        tebaPrice16.setAttribute('style', 'display:none;');
        tebaPrice17.setAttribute('style', 'display:none;');
        tebaPrice18.setAttribute('style', 'display:none;');
        tebaPrice19.setAttribute('style', 'display:none;');
        tebaPrice20.setAttribute('style', 'display:none;');
        tebaPrice21.setAttribute('style', 'display:none;');
        tebaPrice22.setAttribute('style', 'display:none;');
        tebaPrice23.setAttribute('style', 'display:none;');
        tebaPrice25.setAttribute('style', 'display:none;');
        tebaPrice26.setAttribute('style', 'display:none;');
        tebaPrice28.setAttribute('style', 'display:none;');

        window.scrollTo(0, 0);


    };
    
    tebaPizzaButton.onclick = function () {
        
            'use strict';
        
            tebaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
            tebaPizzaButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
            tebaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
            tebaSandwich.setAttribute('style', 'display:none;');
            tebaMacronContent.setAttribute('style', 'display:none;');

            tebaSearch1.setAttribute('style', 'display:none;');
            tebaSearch2.setAttribute('style', 'display:block;');
            tebaSearch3.setAttribute('style', 'display:none;');

            tebaPizzaContent.setAttribute('style', 'display:block;');
            window.scrollTo(0, 0);

            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');


        };
    
    
    tebaMacronButton.onclick = function () {
            
         'use strict';
            
         tebaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
         tebaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
         tebaMacronButton.setAttribute('style', 'border-bottom:2px solid #FFF;');

            tebaMacronContent.setAttribute('style', 'display:block;');

            tebaSearch1.setAttribute('style', 'display:none;');
            tebaSearch2.setAttribute('style', 'display:none;');
            tebaSearch3.setAttribute('style', 'display:block;');
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaSandwich.setAttribute('style', 'display:none;');
            window.scrollTo(0, 0);

            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');
            
        
    };


tebaSearch1.onkeyup = function () {

    'use strict';

    if (tebaSearch1.value == "") {

        tebaSandwich.setAttribute('style', 'display:block;');
        tebaPrice2.setAttribute('style', 'display:none');
        tebaPrice3.setAttribute('style', 'display:none');
        tebaPrice4.setAttribute('style', 'display:none');
        tebaPrice6.setAttribute('style', 'display:none');
        tebaPrice7.setAttribute('style', 'display:none;');
        tebaPrice8.setAttribute('style', 'display:none;');
        tebaPrice9.setAttribute('style', 'display:none;');
        tebaPrice10.setAttribute('style', 'display:none;');
        tebaPrice11.setAttribute('style', 'display:none;');
        tebaPrice12.setAttribute('style', 'display:none;');
        tebaPrice13.setAttribute('style', 'display:none;');
        tebaPrice14.setAttribute('style', 'display:none;');
        tebaPrice15.setAttribute('style', 'display:none;');
        tebaPrice16.setAttribute('style', 'display:none;');
        tebaPrice17.setAttribute('style', 'display:none;');
        tebaPrice18.setAttribute('style', 'display:none;');
        tebaPrice19.setAttribute('style', 'display:none;');
        tebaPrice20.setAttribute('style', 'display:none;');
        tebaPrice21.setAttribute('style', 'display:none;');
        tebaPrice22.setAttribute('style', 'display:none;');
        tebaPrice23.setAttribute('style', 'display:none;');
        tebaPrice25.setAttribute('style', 'display:none;');
        tebaPrice26.setAttribute('style', 'display:none;');
        tebaPrice28.setAttribute('style', 'display:none;');
        window.scrollTo(0, 0); 

    }  else if (tebaSearch1.value == 2) {

        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        

    } else if (tebaSearch1.value == 3) {

        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice2.setAttribute('style', 'display:block');

    } else if (tebaSearch1.value == 4) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');

    } else if (tebaSearch1.value == 5) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');

    } else if (tebaSearch1.value == 6) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');

    } else if (tebaSearch1.value == 7) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 8) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 9) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 10) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 11) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 12) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 13) {
        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 14) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 15) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 16) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 17) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 18) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');

    }  else if (tebaSearch1.value == 19) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');

    }  else if (tebaSearch1.value == 20) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 21) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');

    }  else if (tebaSearch1.value == 22) {

        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 23) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 24) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');

    }else if (tebaSearch1.value == 25) {

        
        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');
        tebaPrice25.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value == 26) {

        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');
        tebaPrice25.setAttribute('style', 'display:block;');
        tebaPrice26.setAttribute('style', 'display:block;');

    }   else if (tebaSearch1.value == 27) {

        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');
        tebaPrice25.setAttribute('style', 'display:block;');
        tebaPrice26.setAttribute('style', 'display:block;');

    } else if (tebaSearch1.value >= 28) {


        tebaSandwich.setAttribute('style', 'display:none;');
        tebaPrice2.setAttribute('style', 'display:block');
        tebaPrice3.setAttribute('style', 'display:block');
        tebaPrice4.setAttribute('style', 'display:block');
        tebaPrice6.setAttribute('style', 'display:block');
        tebaPrice7.setAttribute('style', 'display:block;');
        tebaPrice8.setAttribute('style', 'display:block;');
        tebaPrice9.setAttribute('style', 'display:block;');
        tebaPrice10.setAttribute('style', 'display:block;');
        tebaPrice11.setAttribute('style', 'display:block;');
        tebaPrice12.setAttribute('style', 'display:block;');
        tebaPrice13.setAttribute('style', 'display:block;');
        tebaPrice14.setAttribute('style', 'display:block;');
        tebaPrice15.setAttribute('style', 'display:block;');
        tebaPrice16.setAttribute('style', 'display:block;');
        tebaPrice17.setAttribute('style', 'display:block;');
        tebaPrice18.setAttribute('style', 'display:block;');
        tebaPrice19.setAttribute('style', 'display:block;');
        tebaPrice20.setAttribute('style', 'display:block;');
        tebaPrice21.setAttribute('style', 'display:block;');
        tebaPrice22.setAttribute('style', 'display:block;');
        tebaPrice23.setAttribute('style', 'display:block;');
        tebaPrice25.setAttribute('style', 'display:block;');
        tebaPrice26.setAttribute('style', 'display:block;');
        tebaPrice28.setAttribute('style', 'display:block;');

    } else {

        tebaSandwich.setAttribute('style', 'display:block;');
        tebaPrice2.setAttribute('style', 'display:none');
        tebaPrice3.setAttribute('style', 'display:none');
        tebaPrice4.setAttribute('style', 'display:none');
        tebaPrice6.setAttribute('style', 'display:none');
        tebaPrice7.setAttribute('style', 'display:none;');
        tebaPrice8.setAttribute('style', 'display:none;');
        tebaPrice9.setAttribute('style', 'display:none;');
        tebaPrice10.setAttribute('style', 'display:none;');
        tebaPrice11.setAttribute('style', 'display:none;');
        tebaPrice12.setAttribute('style', 'display:none;');
        tebaPrice13.setAttribute('style', 'display:none;');
        tebaPrice14.setAttribute('style', 'display:none;');
        tebaPrice15.setAttribute('style', 'display:none;');
        tebaPrice16.setAttribute('style', 'display:none;');
        tebaPrice17.setAttribute('style', 'display:none;');
        tebaPrice18.setAttribute('style', 'display:none;');
        tebaPrice19.setAttribute('style', 'display:none;');
        tebaPrice20.setAttribute('style', 'display:none;');
        tebaPrice21.setAttribute('style', 'display:none;');
        tebaPrice22.setAttribute('style', 'display:none;');
        tebaPrice23.setAttribute('style', 'display:none;');
        tebaPrice25.setAttribute('style', 'display:none;');
        tebaPrice26.setAttribute('style', 'display:none;');
        tebaPrice28.setAttribute('style', 'display:none;');     
        window.scrollTo(0, 0);

    }

};  

// End of Search 1 
// =========================================================

tebaSearch2.onkeyup = function () {
    
        'use strict';
    
        if (tebaSearch2.value == "") {
    
            tebaPizzaContent.setAttribute('style', 'display:block;');
            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');     
            window.scrollTo(0, 0);
    
    
        }  else if (tebaSearch2.value == 2) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
    
        } else if (tebaSearch2.value == 3) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice2.setAttribute('style', 'display:block');
    
        } else if (tebaSearch2.value == 4) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
    
        } else if (tebaSearch2.value == 5) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
    
        } else if (tebaSearch2.value == 6) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
    
        } else if (tebaSearch2.value == 7) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 8) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 9) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 10) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 11) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 12) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 13) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 14) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 15) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 16) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 17) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 18) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch2.value == 19) {
            
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch2.value == 20) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 21) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch2.value == 22) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 23) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch2.value == 24) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 25) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 26) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch2.value == 27) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch2.value >= 28) {
    
            tebaPizzaContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
            tebaPrice28.setAttribute('style', 'display:block;');
    
        } else {
    
            tebaPizzaContent.setAttribute('style', 'display:block;');
            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');     
            window.scrollTo(0, 0);
    
    
        }
    
    };
    
// End of Search 2 :)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))


tebaSearch3.onkeyup = function () {
    
        'use strict';
    
        if (tebaSearch3.value == "") {
    
            tebaMacronContent.setAttribute('style', 'display:block;');
            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');
            window.scrollTo(0, 0);     
    
    
        }  else if (tebaSearch3.value == 2) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
    
        } else if (tebaSearch3.value == 3) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice2.setAttribute('style', 'display:block');
    
        } else if (tebaSearch3.value == 4) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
    
        } else if (tebaSearch3.value == 5) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
    
        } else if (tebaSearch3.value == 6) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
    
        } else if (tebaSearch3.value == 7) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 8) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 9) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 10) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 11) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 12) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 13) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 14) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 15) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 16) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 17) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 18) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value == 19) {
            
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value == 20) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 21) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value == 22) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 23) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value == 24) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 25) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
    
        } else if (tebaSearch3.value == 26) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value == 27) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
    
        }  else if (tebaSearch3.value >= 28) {
    
            tebaMacronContent.setAttribute('style', 'display:none;');
            tebaPrice2.setAttribute('style', 'display:block');
            tebaPrice3.setAttribute('style', 'display:block');
            tebaPrice4.setAttribute('style', 'display:block');
            tebaPrice6.setAttribute('style', 'display:block');
            tebaPrice7.setAttribute('style', 'display:block;');
            tebaPrice8.setAttribute('style', 'display:block;');
            tebaPrice9.setAttribute('style', 'display:block;');
            tebaPrice10.setAttribute('style', 'display:block;');
            tebaPrice11.setAttribute('style', 'display:block;');
            tebaPrice12.setAttribute('style', 'display:block;');
            tebaPrice13.setAttribute('style', 'display:block;');
            tebaPrice14.setAttribute('style', 'display:block;');
            tebaPrice15.setAttribute('style', 'display:block;');
            tebaPrice16.setAttribute('style', 'display:block;');
            tebaPrice17.setAttribute('style', 'display:block;');
            tebaPrice18.setAttribute('style', 'display:block;');
            tebaPrice19.setAttribute('style', 'display:block;');
            tebaPrice20.setAttribute('style', 'display:block;');
            tebaPrice21.setAttribute('style', 'display:block;');
            tebaPrice22.setAttribute('style', 'display:block;');
            tebaPrice23.setAttribute('style', 'display:block;');
            tebaPrice25.setAttribute('style', 'display:block;');
            tebaPrice26.setAttribute('style', 'display:block;');
            tebaPrice28.setAttribute('style', 'display:block;');
    
        } else {
    
            tebaMacronContent.setAttribute('style', 'display:block;');
            tebaPrice2.setAttribute('style', 'display:none');
            tebaPrice3.setAttribute('style', 'display:none');
            tebaPrice4.setAttribute('style', 'display:none');
            tebaPrice6.setAttribute('style', 'display:none');
            tebaPrice7.setAttribute('style', 'display:none;');
            tebaPrice8.setAttribute('style', 'display:none;');
            tebaPrice9.setAttribute('style', 'display:none;');
            tebaPrice10.setAttribute('style', 'display:none;');
            tebaPrice11.setAttribute('style', 'display:none;');
            tebaPrice12.setAttribute('style', 'display:none;');
            tebaPrice13.setAttribute('style', 'display:none;');
            tebaPrice14.setAttribute('style', 'display:none;');
            tebaPrice15.setAttribute('style', 'display:none;');
            tebaPrice16.setAttribute('style', 'display:none;');
            tebaPrice17.setAttribute('style', 'display:none;');
            tebaPrice18.setAttribute('style', 'display:none;');
            tebaPrice19.setAttribute('style', 'display:none;');
            tebaPrice20.setAttribute('style', 'display:none;');
            tebaPrice21.setAttribute('style', 'display:none;');
            tebaPrice22.setAttribute('style', 'display:none;');
            tebaPrice23.setAttribute('style', 'display:none;');
            tebaPrice25.setAttribute('style', 'display:none;');
            tebaPrice26.setAttribute('style', 'display:none;');
            tebaPrice28.setAttribute('style', 'display:none;');     
            window.scrollTo(0, 0);
    
    
        }
    
    };  
    







/* ----------------------------------------------------------------------------------------------------------- *//* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */




/* Start Safwa restaurant */

var safwaButton = document.getElementById('safwa-button'),
safwaContent = document.getElementById('safwa-content'),
safwaBack = document.getElementById('safwa-back'),
safwaSandwichButton = document.getElementById('safwa-sandwich-button'),
safwaPizzaButton = document.getElementById('safwa-pizza-button'),
safwaMacronButton = document.getElementById('safwa-macron-button'),
safwaSandwich = document.getElementById('safwa-sandwich-content'),
safwaPizzaContent = document.getElementById('safwa-pizza-content'),
safwaMacronContent = document.getElementById('safwa-macron-content'),
safwaSearch1 = document.getElementById('safwa-search-1'),
safwaSearch2 = document.getElementById('safwa-search-2'),
safwaSearch3 = document.getElementById('safwa-search-3'),


// Safwa prices 

safwaPrice2 = document.getElementById('safwa-price-2'),
safwaPrice3 = document.getElementById('safwa-price-3'),
safwaPrice4 = document.getElementById('safwa-price-4'),
safwaPrice6 = document.getElementById('safwa-price-6'),
safwaPrice7 = document.getElementById('safwa-price-7'),
safwaPrice7_5 = document.getElementById('safwa-price-75'),
safwaPrice8 = document.getElementById('safwa-price-8'),
safwaPrice9 = document.getElementById('safwa-price-9'),
safwaPrice10 = document.getElementById('safwa-price-10'),
safwaPrice11 = document.getElementById('safwa-price-11'),
safwaPrice12 = document.getElementById('safwa-price-12'),
safwaPrice13 = document.getElementById('safwa-price-13'),
safwaPrice14 = document.getElementById('safwa-price-14'),
safwaPrice15 = document.getElementById('safwa-price-15'),
safwaPrice16 = document.getElementById('safwa-price-16'),
safwaPrice17 = document.getElementById('safwa-price-17'),
safwaPrice18 = document.getElementById('safwa-price-18'),
safwaPrice19 = document.getElementById('safwa-price-19'),
safwaPrice20 = document.getElementById('safwa-price-20'),
safwaPrice21 = document.getElementById('safwa-price-21'),
safwaPrice22 = document.getElementById('safwa-price-22'),
safwaPrice23 = document.getElementById('safwa-price-23'),
safwaPrice25 = document.getElementById('safwa-price-25'),
safwaPrice26 = document.getElementById('safwa-price-26'),
safwaPrice28 = document.getElementById('safwa-price-28');











// Show Restaurants buttons 
                                   



// Show contnet of safwa 

 
safwaButton.onclick = function () {

    'use strict';

    upperPlace.setAttribute('style', 'display:none;');
    bottomPlace.setAttribute('style', 'display:none;');
    restButtons.setAttribute('style', 'display:none;');
    safwaBack.setAttribute('style', 'display:inline;');
    safwaContent.setAttribute('style', 'display:block;');

    safwaSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');

};

safwaBack.onclick = function () {

    'use strict'; 

    upperPlace.setAttribute('style', 'display:block;');
    restButtons.setAttribute('style','display:block;');
    backButton.setAttribute('style', 'display:inline;');
    safwaContent.setAttribute('style', 'display:none;');


    safwaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
    safwaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
    safwaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');

    safwaSandwich.setAttribute('style', 'display:block;'); 
    safwaPizzaContent.setAttribute('style', 'display:none;');
    safwaMacronContent.setAttribute('style', 'display:none;');

};


safwaSandwichButton.onclick = function () {
    
        'use strict';
    
        safwaSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
        safwaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
        safwaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');

        safwaSandwich.setAttribute('style', 'display:block;'); 
        safwaPizzaContent.setAttribute('style', 'display:none;');
        safwaMacronContent.setAttribute('style', 'display:none;');

        window.scrollTo(0, 0);

        safwaSearch1.setAttribute('style', 'display:block;');
        safwaSearch2.setAttribute('style', 'display:none;');
        safwaSearch3.setAttribute('style', 'display:none;');
    };
    
    safwaPizzaButton.onclick = function () {
        
            'use strict';
        
            safwaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
            safwaPizzaButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
            safwaMacronButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
            safwaSandwich.setAttribute('style', 'display:none;');
            safwaMacronContent.setAttribute('style', 'display:none;');


            safwaPizzaContent.setAttribute('style', 'display:block;');
            window.scrollTo(0, 0);

            safwaSearch1.setAttribute('style', 'display:none;');
            safwaSearch2.setAttribute('style', 'display:block;');
            safwaSearch3.setAttribute('style', 'display:none;');
        
        };
    
    
    safwaMacronButton.onclick = function () {
            
         'use strict';
            
         safwaSandwichButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
         safwaPizzaButton.setAttribute('style', 'border-bottom:0px solid #FFF;');
         safwaMacronButton.setAttribute('style', 'border-bottom:2px solid #FFF;');

            safwaMacronContent.setAttribute('style', 'display:block;');


            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaSandwich.setAttribute('style', 'display:none;');
            window.scrollTo(0, 0);

            safwaSearch1.setAttribute('style', 'display:none;');
            safwaSearch2.setAttribute('style', 'display:none;');
            safwaSearch3.setAttribute('style', 'display:block;');
    };


    safwaSearch1.onfocus = function () {
        
            'use strict';
        
            this.setAttribute('placeholder', '');
        };
        
        safwaSearch1.onblur = function () {
        
            'use strict';
        
            this.setAttribute('placeholder', 'معاك كام ؟');
        };
        
        safwaSearch2.onfocus = function () {
            
            'use strict';
            
            this.setAttribute('placeholder', '');
        };
            
        safwaSearch2.onblur = function () {
                
            'use strict';
            
            this.setAttribute('placeholder', 'معاك كام ؟');
        };
        
        
        safwaSearch3.onfocus = function () {
                
            'use strict';
                
            this.setAttribute('placeholder', '');
        };
                
        safwaSearch3.onblur = function () {
                    
            'use strict';
                
            this.setAttribute('placeholder', 'معاك كام ؟');
        };




    safwaSearch1.onkeyup = function () {

    'use strict';

    if (safwaSearch1.value == "") {

        safwaSandwich.setAttribute('style', 'display:block;');
        safwaPrice2.setAttribute('style', 'display:none');
        safwaPrice3.setAttribute('style', 'display:none');
        safwaPrice4.setAttribute('style', 'display:none');
        safwaPrice6.setAttribute('style', 'display:none');
        safwaPrice7.setAttribute('style', 'display:none;');
        safwaPrice8.setAttribute('style', 'display:none;');
        safwaPrice9.setAttribute('style', 'display:none;');
        safwaPrice10.setAttribute('style', 'display:none;');
        safwaPrice11.setAttribute('style', 'display:none;');
        safwaPrice12.setAttribute('style', 'display:none;');
        safwaPrice13.setAttribute('style', 'display:none;');
        safwaPrice14.setAttribute('style', 'display:none;');
        safwaPrice15.setAttribute('style', 'display:none;');
        safwaPrice16.setAttribute('style', 'display:none;');
        safwaPrice17.setAttribute('style', 'display:none;');
        safwaPrice18.setAttribute('style', 'display:none;');
        safwaPrice19.setAttribute('style', 'display:none;');
        safwaPrice20.setAttribute('style', 'display:none;');
        safwaPrice21.setAttribute('style', 'display:none;');
        safwaPrice22.setAttribute('style', 'display:none;');
        safwaPrice23.setAttribute('style', 'display:none;');
        safwaPrice25.setAttribute('style', 'display:none;');
        safwaPrice26.setAttribute('style', 'display:none;');
        safwaPrice28.setAttribute('style', 'display:none;');
        window.scrollTo(0, 0); 

    }  else if (safwaSearch1.value == 2) {

        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        

    } else if (safwaSearch1.value == 3) {

        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice2.setAttribute('style', 'display:block');

    } else if (safwaSearch1.value == 4) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');

    } else if (safwaSearch1.value == 5) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');

    } else if (safwaSearch1.value == 6) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');

    } else if (safwaSearch1.value == 7) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 8) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 9) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 10) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 11) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 12) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 13) {
        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 14) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 15) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 16) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 17) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 18) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');

    }  else if (safwaSearch1.value == 19) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');

    }  else if (safwaSearch1.value == 20) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 21) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');

    }  else if (safwaSearch1.value == 22) {

        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 23) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 24) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 25) {

        
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');
        safwaPrice25.setAttribute('style', 'display:block;');

    } else if (safwaSearch1.value == 26) {

        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');
        safwaPrice25.setAttribute('style', 'display:block;');
        safwaPrice26.setAttribute('style', 'display:block;');

    } else if (safwaSearch2.value == 27) {
    
        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');
        safwaPrice25.setAttribute('style', 'display:block;');
        safwaPrice26.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch1.value >= 28) {


        safwaSandwich.setAttribute('style', 'display:none;');
        safwaPrice2.setAttribute('style', 'display:block');
        safwaPrice3.setAttribute('style', 'display:block');
        safwaPrice4.setAttribute('style', 'display:block');
        safwaPrice6.setAttribute('style', 'display:block');
        safwaPrice7.setAttribute('style', 'display:block;');
        safwaPrice8.setAttribute('style', 'display:block;');
        safwaPrice9.setAttribute('style', 'display:block;');
        safwaPrice10.setAttribute('style', 'display:block;');
        safwaPrice11.setAttribute('style', 'display:block;');
        safwaPrice12.setAttribute('style', 'display:block;');
        safwaPrice13.setAttribute('style', 'display:block;');
        safwaPrice14.setAttribute('style', 'display:block;');
        safwaPrice15.setAttribute('style', 'display:block;');
        safwaPrice16.setAttribute('style', 'display:block;');
        safwaPrice17.setAttribute('style', 'display:block;');
        safwaPrice18.setAttribute('style', 'display:block;');
        safwaPrice19.setAttribute('style', 'display:block;');
        safwaPrice20.setAttribute('style', 'display:block;');
        safwaPrice21.setAttribute('style', 'display:block;');
        safwaPrice22.setAttribute('style', 'display:block;');
        safwaPrice23.setAttribute('style', 'display:block;');
        safwaPrice25.setAttribute('style', 'display:block;');
        safwaPrice26.setAttribute('style', 'display:block;');
        safwaPrice28.setAttribute('style', 'display:block;');

    } else {

        safwaSandwich.setAttribute('style', 'display:block;');
        safwaPrice2.setAttribute('style', 'display:none');
        safwaPrice3.setAttribute('style', 'display:none');
        safwaPrice4.setAttribute('style', 'display:none');
        safwaPrice6.setAttribute('style', 'display:none');
        safwaPrice7.setAttribute('style', 'display:none;');
        safwaPrice8.setAttribute('style', 'display:none;');
        safwaPrice9.setAttribute('style', 'display:none;');
        safwaPrice10.setAttribute('style', 'display:none;');
        safwaPrice11.setAttribute('style', 'display:none;');
        safwaPrice12.setAttribute('style', 'display:none;');
        safwaPrice13.setAttribute('style', 'display:none;');
        safwaPrice14.setAttribute('style', 'display:none;');
        safwaPrice15.setAttribute('style', 'display:none;');
        safwaPrice16.setAttribute('style', 'display:none;');
        safwaPrice17.setAttribute('style', 'display:none;');
        safwaPrice18.setAttribute('style', 'display:none;');
        safwaPrice19.setAttribute('style', 'display:none;');
        safwaPrice20.setAttribute('style', 'display:none;');
        safwaPrice21.setAttribute('style', 'display:none;');
        safwaPrice22.setAttribute('style', 'display:none;');
        safwaPrice23.setAttribute('style', 'display:none;');
        safwaPrice25.setAttribute('style', 'display:none;');
        safwaPrice26.setAttribute('style', 'display:none;');
        safwaPrice28.setAttribute('style', 'display:none;');
        window.scrollTo(0, 0); 


    }

};  




safwaSearch2.onkeyup = function () {
    
        'use strict';
    
        if (safwaSearch2.value == "") {
    
            safwaPizzaContent.setAttribute('style', 'display:block;');
            safwaPrice2.setAttribute('style', 'display:none');
            safwaPrice3.setAttribute('style', 'display:none');
            safwaPrice4.setAttribute('style', 'display:none');
            safwaPrice6.setAttribute('style', 'display:none');
            safwaPrice7.setAttribute('style', 'display:none;');
            safwaPrice8.setAttribute('style', 'display:none;');
            safwaPrice9.setAttribute('style', 'display:none;');
            safwaPrice10.setAttribute('style', 'display:none;');
            safwaPrice11.setAttribute('style', 'display:none;');
            safwaPrice12.setAttribute('style', 'display:none;');
            safwaPrice13.setAttribute('style', 'display:none;');
            safwaPrice14.setAttribute('style', 'display:none;');
            safwaPrice15.setAttribute('style', 'display:none;');
            safwaPrice16.setAttribute('style', 'display:none;');
            safwaPrice17.setAttribute('style', 'display:none;');
            safwaPrice18.setAttribute('style', 'display:none;');
            safwaPrice19.setAttribute('style', 'display:none;');
            safwaPrice20.setAttribute('style', 'display:none;');
            safwaPrice21.setAttribute('style', 'display:none;');
            safwaPrice22.setAttribute('style', 'display:none;');
            safwaPrice23.setAttribute('style', 'display:none;');
            safwaPrice25.setAttribute('style', 'display:none;');
            safwaPrice26.setAttribute('style', 'display:none;');
            safwaPrice28.setAttribute('style', 'display:none;');
            window.scrollTo(0, 0); 
    
        }  else if (safwaSearch2.value == 2) {
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            
    
        } else if (safwaSearch2.value == 3) {
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice2.setAttribute('style', 'display:block');
    
        } else if (safwaSearch2.value == 4) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
    
        } else if (safwaSearch2.value == 5) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
    
        } else if (safwaSearch2.value == 6) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
    
        } else if (safwaSearch2.value == 7) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 8) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 9) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 10) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 11) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 12) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 13) {
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 14) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 15) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 16) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 17) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 18) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value == 19) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value == 20) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 21) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value == 22) {
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 23) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value == 24) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value == 25) {
    
            
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
            safwaPrice25.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 26) {
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
            safwaPrice25.setAttribute('style', 'display:block;');
            safwaPrice26.setAttribute('style', 'display:block;');
    
        } else if (safwaSearch2.value == 27) {
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
            safwaPrice25.setAttribute('style', 'display:block;');
            safwaPrice26.setAttribute('style', 'display:block;');
    
        }  else if (safwaSearch2.value >= 28) {
    
    
            safwaPizzaContent.setAttribute('style', 'display:none;');
            safwaPrice2.setAttribute('style', 'display:block');
            safwaPrice3.setAttribute('style', 'display:block');
            safwaPrice4.setAttribute('style', 'display:block');
            safwaPrice6.setAttribute('style', 'display:block');
            safwaPrice7.setAttribute('style', 'display:block;');
            safwaPrice8.setAttribute('style', 'display:block;');
            safwaPrice9.setAttribute('style', 'display:block;');
            safwaPrice10.setAttribute('style', 'display:block;');
            safwaPrice11.setAttribute('style', 'display:block;');
            safwaPrice12.setAttribute('style', 'display:block;');
            safwaPrice13.setAttribute('style', 'display:block;');
            safwaPrice14.setAttribute('style', 'display:block;');
            safwaPrice15.setAttribute('style', 'display:block;');
            safwaPrice16.setAttribute('style', 'display:block;');
            safwaPrice17.setAttribute('style', 'display:block;');
            safwaPrice18.setAttribute('style', 'display:block;');
            safwaPrice19.setAttribute('style', 'display:block;');
            safwaPrice20.setAttribute('style', 'display:block;');
            safwaPrice21.setAttribute('style', 'display:block;');
            safwaPrice22.setAttribute('style', 'display:block;');
            safwaPrice23.setAttribute('style', 'display:block;');
            safwaPrice25.setAttribute('style', 'display:block;');
            safwaPrice26.setAttribute('style', 'display:block;');
            safwaPrice28.setAttribute('style', 'display:block;');
    
        } else {
    
            safwaPizzaContent.setAttribute('style', 'display:block;');
            safwaPrice2.setAttribute('style', 'display:none');
            safwaPrice3.setAttribute('style', 'display:none');
            safwaPrice4.setAttribute('style', 'display:none');
            safwaPrice6.setAttribute('style', 'display:none');
            safwaPrice7.setAttribute('style', 'display:none;');
            safwaPrice8.setAttribute('style', 'display:none;');
            safwaPrice9.setAttribute('style', 'display:none;');
            safwaPrice10.setAttribute('style', 'display:none;');
            safwaPrice11.setAttribute('style', 'display:none;');
            safwaPrice12.setAttribute('style', 'display:none;');
            safwaPrice13.setAttribute('style', 'display:none;');
            safwaPrice14.setAttribute('style', 'display:none;');
            safwaPrice15.setAttribute('style', 'display:none;');
            safwaPrice16.setAttribute('style', 'display:none;');
            safwaPrice17.setAttribute('style', 'display:none;');
            safwaPrice18.setAttribute('style', 'display:none;');
            safwaPrice19.setAttribute('style', 'display:none;');
            safwaPrice20.setAttribute('style', 'display:none;');
            safwaPrice21.setAttribute('style', 'display:none;');
            safwaPrice22.setAttribute('style', 'display:none;');
            safwaPrice23.setAttribute('style', 'display:none;');
            safwaPrice25.setAttribute('style', 'display:none;');
            safwaPrice26.setAttribute('style', 'display:none;');
            safwaPrice28.setAttribute('style', 'display:none;');
            window.scrollTo(0, 0); 

        }
    
    };  
    

    safwaSearch3.onkeyup = function () {
        
            'use strict';
        
            if (safwaSearch3.value == "") {
        
                safwaMacronContent.setAttribute('style', 'display:block;');
                safwaPrice2.setAttribute('style', 'display:none');
                safwaPrice3.setAttribute('style', 'display:none');
                safwaPrice4.setAttribute('style', 'display:none');
                safwaPrice6.setAttribute('style', 'display:none');
                safwaPrice7.setAttribute('style', 'display:none;');
                safwaPrice8.setAttribute('style', 'display:none;');
                safwaPrice9.setAttribute('style', 'display:none;');
                safwaPrice10.setAttribute('style', 'display:none;');
                safwaPrice11.setAttribute('style', 'display:none;');
                safwaPrice12.setAttribute('style', 'display:none;');
                safwaPrice13.setAttribute('style', 'display:none;');
                safwaPrice14.setAttribute('style', 'display:none;');
                safwaPrice15.setAttribute('style', 'display:none;');
                safwaPrice16.setAttribute('style', 'display:none;');
                safwaPrice17.setAttribute('style', 'display:none;');
                safwaPrice18.setAttribute('style', 'display:none;');
                safwaPrice19.setAttribute('style', 'display:none;');
                safwaPrice20.setAttribute('style', 'display:none;');
                safwaPrice21.setAttribute('style', 'display:none;');
                safwaPrice22.setAttribute('style', 'display:none;');
                safwaPrice23.setAttribute('style', 'display:none;');
                safwaPrice25.setAttribute('style', 'display:none;');
                safwaPrice26.setAttribute('style', 'display:none;');
                safwaPrice28.setAttribute('style', 'display:none;');
                window.scrollTo(0, 0); 
        
            }  else if (safwaSearch3.value == 2) {
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                
        
            } else if (safwaSearch3.value == 3) {
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice2.setAttribute('style', 'display:block');
        
            } else if (safwaSearch3.value == 4) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
        
            } else if (safwaSearch3.value == 5) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
        
            } else if (safwaSearch3.value == 6) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
        
            } else if (safwaSearch3.value == 7) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 8) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 9) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 10) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 11) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 12) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 13) {
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 14) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 15) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 16) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 17) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 18) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
        
            }  else if (safwaSearch3.value == 19) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
        
            }  else if (safwaSearch3.value == 20) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 21) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
        
            }  else if (safwaSearch3.value == 22) {
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 23) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 24) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 25) {
        
                
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
                safwaPrice25.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 26) {
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
                safwaPrice25.setAttribute('style', 'display:block;');
                safwaPrice26.setAttribute('style', 'display:block;');
        
            } else if (safwaSearch3.value == 27) {
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
                safwaPrice25.setAttribute('style', 'display:block;');
                safwaPrice26.setAttribute('style', 'display:block;');
        
            }  else if (safwaSearch3.value >= 28) {
        
        
                safwaMacronContent.setAttribute('style', 'display:none;');
                safwaPrice2.setAttribute('style', 'display:block');
                safwaPrice3.setAttribute('style', 'display:block');
                safwaPrice4.setAttribute('style', 'display:block');
                safwaPrice6.setAttribute('style', 'display:block');
                safwaPrice7.setAttribute('style', 'display:block;');
                safwaPrice8.setAttribute('style', 'display:block;');
                safwaPrice9.setAttribute('style', 'display:block;');
                safwaPrice10.setAttribute('style', 'display:block;');
                safwaPrice11.setAttribute('style', 'display:block;');
                safwaPrice12.setAttribute('style', 'display:block;');
                safwaPrice13.setAttribute('style', 'display:block;');
                safwaPrice14.setAttribute('style', 'display:block;');
                safwaPrice15.setAttribute('style', 'display:block;');
                safwaPrice16.setAttribute('style', 'display:block;');
                safwaPrice17.setAttribute('style', 'display:block;');
                safwaPrice18.setAttribute('style', 'display:block;');
                safwaPrice19.setAttribute('style', 'display:block;');
                safwaPrice20.setAttribute('style', 'display:block;');
                safwaPrice21.setAttribute('style', 'display:block;');
                safwaPrice22.setAttribute('style', 'display:block;');
                safwaPrice23.setAttribute('style', 'display:block;');
                safwaPrice25.setAttribute('style', 'display:block;');
                safwaPrice26.setAttribute('style', 'display:block;');
                safwaPrice28.setAttribute('style', 'display:block;');
        
            } else {
        
                safwaMacronContent.setAttribute('style', 'display:block;');
                safwaPrice2.setAttribute('style', 'display:none');
                safwaPrice3.setAttribute('style', 'display:none');
                safwaPrice4.setAttribute('style', 'display:none');
                safwaPrice6.setAttribute('style', 'display:none');
                safwaPrice7.setAttribute('style', 'display:none;');
                safwaPrice8.setAttribute('style', 'display:none;');
                safwaPrice9.setAttribute('style', 'display:none;');
                safwaPrice10.setAttribute('style', 'display:none;');
                safwaPrice11.setAttribute('style', 'display:none;');
                safwaPrice12.setAttribute('style', 'display:none;');
                safwaPrice13.setAttribute('style', 'display:none;');
                safwaPrice14.setAttribute('style', 'display:none;');
                safwaPrice15.setAttribute('style', 'display:none;');
                safwaPrice16.setAttribute('style', 'display:none;');
                safwaPrice17.setAttribute('style', 'display:none;');
                safwaPrice18.setAttribute('style', 'display:none;');
                safwaPrice19.setAttribute('style', 'display:none;');
                safwaPrice20.setAttribute('style', 'display:none;');
                safwaPrice21.setAttribute('style', 'display:none;');
                safwaPrice22.setAttribute('style', 'display:none;');
                safwaPrice23.setAttribute('style', 'display:none;');
                safwaPrice25.setAttribute('style', 'display:none;');
                safwaPrice26.setAttribute('style', 'display:none;');
                safwaPrice28.setAttribute('style', 'display:none;');
                window.scrollTo(0, 0); 
    
            }
        
        };  
    






/* ENd safwa */




/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*//* ------------------------------------------------------------------------------------------------------------------*//* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/
                                                    // Cairo Restaurants
/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------*/










/* Start Horus */



var horusContent = document.getElementById('horus-content'),
    horusButton = document.getElementById('horus-button'),
    horusBack = document.getElementById('horus-back'),
    horusSandwichContent = document.getElementById('horus-sandwich-content'),
    horusPizzaContent = document.getElementById('horus-pizza-content'),
    horusDrinksContent = document.getElementById('horus-drinks-content'),
    horusSandwichButton = document.getElementById('horus-sandwich-button'),
    horusPizzaButton = document.getElementById('horus-pizza-button'),
    horusDrinksButton = document.getElementById('horus-drinks-button');
    



horusButton.onclick = function () {
    
    'use strict';
    horusContent.setAttribute('style', 'display:block;');
    upperPlace.setAttribute('style', 'display:none;');
    restButtons.setAttribute('style', 'display:none;');
    horusSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
    window.scrollTo(0, 0);

};

horusBack.onclick = function () {
    
    'use strict';

    horusContent.setAttribute('style', 'display:none;');
    upperPlace.setAttribute('style', 'display:block;');
    restButtons.setAttribute('style', 'display:block;');
    window.scrollTo(0, 0);

};

horusSandwichButton.onclick = function () {

    'use strict';

    horusSandwichContent.setAttribute('style', 'display:block;');
    horusPizzaContent.setAttribute('style', 'display:none;');
    horusDrinksContent.setAttribute('style', 'display:none;');

    horusSandwichButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
    horusPizzaButton.setAttribute('style', 'border-bottom:none');
    horusDrinksButton.setAttribute('style', 'border-bottom:none');
    window.scrollTo(0, 0);
};


horusPizzaButton.onclick = function () {

    'use strict';

    horusSandwichContent.setAttribute('style', 'display:none;');
    horusPizzaContent.setAttribute('style', 'display:block;');
    horusDrinksContent.setAttribute('style', 'display:none;');

    horusSandwichButton.setAttribute('style', 'border-bottom:none;');
    horusPizzaButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
    horusDrinksButton.setAttribute('style', 'border-bottom:none');
    window.scrollTo(0, 0);
};


horusDrinksButton.onclick = function () {

    'use strict';

    horusSandwichContent.setAttribute('style', 'display:none;');
    horusPizzaContent.setAttribute('style', 'display:none;');
    horusDrinksContent.setAttribute('style', 'display:block;');

    horusSandwichButton.setAttribute('style', 'border-bottom:none;');
    horusPizzaButton.setAttribute('style', 'border-bottom:none');
    horusDrinksButton.setAttribute('style', 'border-bottom:2px solid #FFF;');
    window.scrollTo(0, 0);
};






/* End Horus */


















