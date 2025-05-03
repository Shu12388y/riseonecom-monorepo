export const handleDate = (args: number): Date => {
    const now = new Date();
    now.setMonth(now.getMonth() + args);
    return now; 
  };
  