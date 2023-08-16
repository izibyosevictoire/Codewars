export const distinct = (a: number[]): number[] => {
    const unique = new Set(a);
     return Array.from(unique);
 
 }