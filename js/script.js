var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);

function myFunction() {
  alert("We are still under full operation and continue to serve the bay are during our lockdown. This guidance provides recommendations on the cleaning and disinfection of households where persons under investigation (PUI) or those with confirmed COVID-19 reside or may be in self- isolation. It is aimed at limiting the survival of the virus in the environments. These recommendations will be updated if additional information becomes available.  These guidelines are focused on household settings and are meant for the general public.  Cleaning refers to the removal of germs, dirt, and impurities from surfaces. It does not kill germs, but by removing them, it lowers their numbers and the risk of spreading infection. Disinfecting refers to using chemicals, for example, EPA-registered disinfectants, to kill germs on surfaces. This process does not necessarily clean dirty surfaces or remove germs, but by killing germs on a surface after cleaning, it can further lower the risk of spreading infection.");
}
