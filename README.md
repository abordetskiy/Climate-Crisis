# Climate-Crisis

#### Basic Outline
1) Find and familiarze with datasets online
2) Use Python to pull in our data (api, csv, etc)
3) Put all our data into Pandas Dataframes
4) Maybe do some statistical analysis, some preliminary charts?
5) Create HTML landing page with tags to house our charts
6) Create Flask app to Pass data into HTML webpage
7) Use JavaScript to finish the webpage and make it pretty
8) Use D3.js to make a functional chart or two


#### Data Investigation

Kyle - API URL: https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-summary-of-the-day&dataTypes=LATITUDE,LONGITUDE,TEMP,PRCP&stations=72793024233,99999924233,72295023174,99999923174,72606014764,99999914764,72211012842,99999912842,72258013960,72258113960,72258313960,72270023044,99999923044,72251012924,72640014839,99999914839,72537094847,99999914822,72658014922,99999914922,70026027502,91182022521,72572024127,72434013994,99999913994&startDate=1950-01-01&endDate=2020-10-01&format=csv
     - Temps and Precipitation

Trey - https://www.esrl.noaa.gov/gmd/dv/data/index.php?category=Greenhouse%2BGases&frequency=Monthly%2BAverages&site=BRW&type=Flask
     - Greenhouse Gasses

Ronald - https://www.ncdc.noaa.gov/stormevents/ftp.jsp
     - Storms and MAYBE Fatalities

Artem - https://waterdata.usgs.gov/nwis/sw
     - Water (Rivers, Lakes, MAYBE Coastlines)

Jacob - https://www.epa.gov/climate-indicators/climate-change-indicators-sea-surface-temperature
      - Ocean Temperature