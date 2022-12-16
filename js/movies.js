let movies = [
    {
        id: 0,
        name: "Warriors of Future",
        img: "Warriors of Future .jpg",
        category: "action",
        rate: "2",
        description: "When a meteor carrying a destructive plant strikes the world, a suicide squad is given hours to save their post-apocalyptic city from total collapse."
    },

    {
        id: 1,
        name: "Emancipation",
        img: "Emancipation.jpg",
        category: "action",
        rate: "5",
        description: "A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him."
    },

    {
        id: 2,
        name: "My Name Is Vendetta",
        img: "My Name Is Vendetta.jpg",
        category: "action",
        rate: "3",
        description: "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge."
    },

    {
        id: 3,
        name: "Paradise City",
        img: "paradise city.jpg",
        category: "action",
        rate: "4",
        description: "Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father."
    },

    {
        id: 4,
        name: "The System",
        img: "the system.jpg",
        category: "action",
        rate: "4",
        description: "When a young soldier, newly returned from war, gets caught up in a drug bust, he is recruited by the authorities to go undercover in a notoriously dangerous prison in order to figure out what is really going on."
    },

    {
        id: 5,
        name: "Something from Tiffany's",
        img: "Something from Tiffany's.jpg",
        category: "comedy",
        rate: "1",
        description: "Follows a woman as her life gets upended when an engagement ring that was for someone else leads her to the person she's meant to be with."
    },

    {
        id: 6,
        name: "The Boss Baby: Christmas Bonus",
        img: "The Boss Baby Christmas Bonus.jpg",
        category: "animation",
        rate: "5",
        description: "Christmas Eve takes a twisty turn when the Boss Baby accidentally swaps places with one of Santa's elves and gets stranded at the North Pole."
    },

    {
        id: 7,
        name: "Tom and Jerry: Snowman's Land",
        img: "Tom and Jerry Snowman's Land.jpg",
        category: "animation",
        rate: "4",
        description: "With magic in the air, Jerry and his nephew, Tuffy, make a snow mouse that miraculously comes to life.To keep their new friend, Larry the snow mouse from melting, Tuffy and Jerry must race him to the fabled Snowman's Village."
    },

    {
        id: 8,
        name: "DC League of Super-Pets",
        img: "DC League of Super-Pets.jpg",
        category: "animation",
        rate: "3",
        description: "Krypto the Super-Dog and Superman are inseparable best friends, sharing the same superpowers and fighting crime side by side in Metropolis. However, Krypto must master his own powers for a rescue mission when Superman is kidnapped."
    },

    {
        id: 9,
        name: "Diary of a Wimpy Kid: Rodrick Rulesc",
        img: "Diary of a Wimpy Kid  Rodrick Rules.jpg",
        category: "animation",
        rate: "1",
        description: "A new school year, his brother Rodrick teases him over and over and over and over again. Will Greg manage to get along with him? Or will a secret ruin everything"
    },

    {
        id: 10,
        name: "Delivery by Christmas",
        img: "Delivery by Christmas.jpg",
        category: "romance",
        rate: "1",
        description: "When a spiteful coworker sabotages her deliveries, a courier and a helpful customer must race to return Christmas presents to their intended recipients."
    },

    {
        id: 11,
        name: "9 Ways to Hell",
        img: "9 Ways to Hell.jpg",
        category: "horror",
        rate: "3",
        description: "A multi-award winning Horror Compilation inspired by Dante's Inferno. 9 diverse filmmakers deliver a twisted mix of blood and violence, comedy and carnage, demonic creatures and real world terrors, social commentary and WTF madness."
    },

    {
        id: 12,
        name: "Orphan: First Kill",
        img: "Orphan First Kill.jpg",
        category: "horror",
        rate: "4",
        description: "After orchestrating a brilliant escape from an Estonian psychiatric facility, Esther travels to America by impersonating the missing daughter of a wealthy family."
    },

    {
        id: 13,
        name: "The Bad Seed Returns",
        img: "The Bad Seed Returns.jpg",
        category: "horror",
        rate: "5",
        description: "Follows Emma, a typical teenaged girl who is anything but that. Meanwhile, a new girl at school seems to know Emma's secrets, leaving Emma to take care of her enemies by any means necessary."
    },

    {
        id: 14,
        name: "Christmas Full of Grace",
        img: "Christmas Full of Grace.jpg",
        category: "romance",
        rate: "2",
        description: "Carlinhos catches his partner cheating, then meets lively Graça, who poses as his new one so he can save face at Christmas with his traditional family."
    },

    {
        id: 15,
        name: "Someone Borrowed",
        img: "Someone Borrowed.jpg",
        category: "romance",
        rate: "1",
        description: "A stubborn bachelor hires an actress to play his fiancee to fulfill his dying mother's final wish, and try to avoid her deleting him from her will."
    },

    {
        id: 16,
        name: "All Quiet on the Western Front",
        img: "All Quiet on the Western Front.jpg",
        category: "war",
        rate: "5",
        description: "A young German soldier's terrifying experiences and distress on the western front during World War I."
    },

    {
        id: 17,
        name: "Sniper. The White Raven",
        img: "Sniper. The White Raven.jpg",
        category: "war",
        rate: "4",
        description: "After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict."
    },

    {
        id: 18,
        name: "Lost Transport",
        img: "Lost Transport.jpg",
        category: "war",
        rate: "1",
        description: "In the spring of 1945 a train deporting hundreds of Jewish prisoners gets stranded near a small German village occupied by the Red Army. Condemned to each other and in a context of deep mistrust, desperation and revenge, an unexpected friendship emerges between Russian sniper Vera, village girl Winnie and Jewish-Dutch woman Simone."
    },

    {
        id: 19,
        name: "The Soccer Football Movie",
        img: "The Soccer Football Movie.jpg",
        category: "animation",
        rate: "1",
        description: "Four young soccer superfans team up to help their idols regain their abilities after a scheming evil scientist steals their talent."
    },
]


var getmovies = JSON.parse(localStorage.getItem('movies')) || []

if (getmovies.length == 0) {
    localStorage.setItem("movies", JSON.stringify(movies));
}
