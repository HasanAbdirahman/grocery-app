import { Country, State } from "country-state-city"
export default  function Order(){

   let countryCode;
    let countries = Country.getAllCountries().map((country) => ({
        value: country.name,
        displayValue: `${country.name} - ${country.isoCode}`,
        countryCode: country.isoCode
    }))
    const stateData = State.getStatesOfCountry(countryCode).map(state => ({
        value: state.name,
        displayValue: state.name
    }))
    
    return (
            <form>
                <select>
                {countries.map((eachData,index) => {
                   return <option key ={index}value = {eachData.value}>{eachData.displayValue}</option>
                })}
                </select>
                <select>
                {stateData.map((eachStateData,index) => {
                   return <option key ={index}value = {eachStateData.value}>{eachStateData.displayValue}</option>
                })}
                </select>
            </form>
    )
}