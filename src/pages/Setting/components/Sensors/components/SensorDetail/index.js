import {useForm} from 'react-hook-form'

function SensorDetail({choose, setSensorList, sensorForm, sensorList}) {
    const { register, getValues } = useForm();

    return (
      <form style={{
        backgroundColor: "blueviolet",
        position:"absolute",
        zIndex:1000,
        left:"50%",
        padding: '20px',
      }}
  
      >
        <div className="form-group">
          <label htmlFor="ID">Sensor ID</label>
          <input type="text" 
                  className="form-control" 
                  id="ID" 
                  defaultValue={sensorList[choose].id}
                  {...register("ID")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder=""
                  defaultValue={sensorList[choose].name}
                  {...register("name")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input type="text" 
                  className="form-control" 
                  id="type" 
                  placeholder=""
                  defaultValue={sensorList[choose].type}
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
                    defaultValue={sensorList[choose].long}
                    {...register("lng")}
            />
          </div>
          <div className = "col-6">
            <label htmlFor="lat">Latitude</label>
            <input type="text" 
                    className="form-control" 
                    id="lat" 
                    placeholder=""
                    defaultValue={sensorList[choose].lat}
                    {...register("lat")}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            const values = getValues(); // { test: "test-input", test1: "test1-input" }

            console.log(values);
          }}
        >
          Get Values
        </button>
      </form>
    );
}

export default SensorDetail;