import {useForm} from 'react-hook-form'

function SensorDetail({choose, setSensorList, sensorList, sensorChange, showForm}) {
    const { register, getValues } = useForm();
    const sensor =  sensorList[choose]
    const handleSubmit = () => {
      const values = getValues(); // { test: "test-input", test1: "test1-input" }
      const id = sensor.id
      if(parseFloat(values['long']) !== sensor['coordinate'][0])
        sensorChange.current[id].push({long:parseFloat(values.long)})
      if(parseFloat(values['lat']) !== sensor['coordinate'][1])
        sensorChange.current[id].push({lat:parseFloat(values.lat)})
      if(values['name'] !== sensor['name'])
        sensorChange.current[id].push({name:values['name']})
      if(values['type'] !== sensor['type'])
        sensorChange.current[id].push({name:values['name']})
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
        <h2>{sensor.id}</h2>

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
            onClick={() => {
              const values = getValues(); // { test: "test-input", test1: "test1-input" }
              console.log(values);
            }}

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