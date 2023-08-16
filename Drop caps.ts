export function dropCap(s: string): string {
    const words = s.split(" ");
     
     const dropCap = words.map(word =>{
        if (word.length > 2) {
               return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
           } else {
               return word;
           }
     });
     return  dropCap.join(" ");
   }