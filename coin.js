function findfakecoin
        (fakecoin, isheavy) {
            console.log("user input: coin " + fakecoin + " isheavy=" + isheavy);

            const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

            //toto je nasa vaha
            function weigh(left, right)
            {
                let leftweight = 0;
                let rightweight = 0;

                for (let coin of left)
                {
                    if (coin === fakecoin)
                    {
                        leftweight += isheavy ? 2 : 0.5;
                    }
                    else
                    {
                        leftweight += 1;
                    }
                    leftweight++
                }


                for (let coin of right)
                {
                    if (coin === fakecoin)
                    {
                        rightweight += isheavy ? 2 : 0.5;
                    }
                    else
                    {
                        rightweight += 1;
                    }
                    rightweight++
                }

                if (leftweight > rightweight) return "left heavier";
                if (rightweight > leftweight) return "right heavier";
                return "balanced";
            }

            console.log("=== prve vazenie ===");
            let vysledok1 = weight([1, 2, 3, 4,], [5, 6, 7, 8,]);
           console.log("vysleodk prveho vazenia [1, 2, 3, 4,] vs [5, 6, 7, 8,]: " + vysledok1);
       
        console.log("=== druhe vazenie ===");
        let vysledok2 = weight([1, 2, 5, 6,], [3, 4, 9, 10,]);
        console.log("vysleodk druheho vazenia [1, 2, 5, 6,] vs [3, 4, 9, 10,]: " + vysledok2);

        console.log("=== tretie vazenie ===");
        let vysledok3 = weight([1, 3, 5, 7,], [2, 4, 6, 8,]);
        console.log("vysleodk tretieho vazenia [1, 3, 5, 7,] vs [2, 4, 6, 8,]: " + vysledok3);
       
       
       
       
       
       
        }

        findfakecoin(7, false)