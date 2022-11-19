import {useForm} from 'react-hook-form'
import { baseSensor , checkIndex} from '../../../../../../services/sensor';
function SensorDetail({choose, setSensorList, sensorList, sensorChange, setShowForm}) {
    // If there is no choose means It will add new value
    // If there is no sensorChange means It is new Sensor

    const { register, getValues } = useForm();

    const sensor =  choose >= 0 ? sensorList[choose] : baseSensor 
    const isNew = choose >= 0 ? sensorList[choose].hasOwnProperty("new") : true;

    const handleSubmit = () => {

        const values = getValues(); // { test: "test-input", test1: "test1-input" }
        const id = sensor.id

        if(parseFloat(values['long']) !== sensor['coordinate'][0]) {
          const value = parseFloat(values.long);
          if(sensorChange && !isNew) 
            sensorChange.current[id].push({long:value})
          sensor['coordinate'][0] = value
        }
        if(parseFloat(values['lat']) !== sensor['coordinate'][1]) {
          const value = parseFloat(values.lat);
          if(sensorChange && !isNew) 
            sensorChange.current[id].push({lat:value})
          sensor['coordinate'][1] = value
        }
        if(values['name'] !== sensor['name']) {
          const value = values.name;
          if(sensorChange && !isNew) 
            sensorChange.current[id].push({name:value})
          sensor['name'] = value
        }
        if(values['type'] !== sensor['type']) {
          const value = values.type;
          if(sensorChange && !isNew) 
            sensorChange.current[id].push({type:value})
          sensor['type'] = value
        }
      
      if(choose >= 0)
        // If sensor exist
        setSensorList(prev => [...prev.slice(0,choose),sensor,...prev.slice(choose+1)])
      else {
        // If sensor Not exist
        setSensorList(prev => [...prev,sensor])
      }

      setShowForm(prev => !prev)
    }

    const handleCancel = () => {
      setShowForm(prev => !prev)
    }
    return (
      <form style={{
        backgroundColor: "white",
        position:"absolute",
        zIndex:4,
        left:"50%",
        padding: '2%',
        
      }}
      onSubmit={e => { e.preventDefault(); }} // Disable Submission to handle Form Input
      >
        <h2>{sensor.id?sensor.id:"New Sensor"}</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder=""
                  defaultValue={sensor.name}
                  {...register("name")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input type="text" 
                  className="form-control" 
                  id="type" 
                  placeholder=""
                  defaultValue={sensor.type}
                  {...register("type")}
          />
        </div>

        <div className="form-group row">
          <div className = "col-6">
            <label htmlFor="long">Longtitude</label>
            <input type="text" 
                    className="form-control" 
                    id="long" 
                    placeholder=""
                    defaultValue={sensor.coordinate[0]}
                    {...register("long")}
            />
          </div>
          <div className = "col-6">
            <label htmlFor="lat">Latitude</label>
            <input type="text" 
                    className="form-control" 
                    id="lat" 
                    placeholder=""
                    defaultValue={sensor.coordinate[1]}
                    {...register("lat")}
            />
          </div>
        </div>

        <div className='row mt-2 gap-4'>
          <button
            className='col btn btn-danger'
            onClick={() => handleCancel()}

          >
            Hủy
          </button>
            
          <button
            className='col btn btn-success'
            onClick={() => {handleSubmit()}}
          >
            Xác nhận
          </button>
        </div>
      </form>
    );
}

export default SensorDetail;