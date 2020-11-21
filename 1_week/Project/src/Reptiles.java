
public class Reptiles extends Animals{
	
	protected boolean waterhabitat;
	protected double length;
	protected boolean hibernation;
	protected double temperature;
	protected double temp_now;
	
	Reptiles(){
		waterhabitat = true;
		length = 14;
		hibernation = true;
		temperature = 20;
		temp_now = 20;
	}	
	
	Reptiles(double weight, double size, boolean predator, String type, boolean waterhabitat, double length, boolean hibernation, double temperature){
		super(weight, size, predator, type);
		this.waterhabitat = waterhabitat;
		this.length = length;
		this.hibernation = hibernation;
		this.temperature = temperature;
		temp_now = 20;
	}	
	
	public boolean getWaterhabitat() {
		return waterhabitat;
	}
	
	public void setWaterhabitat(boolean waterhabitat) {
		this.waterhabitat = waterhabitat;
	}
	
	public double getLength() {
		return length;
	}
	
	public void setLength(double length) {
		this.length = length;
	}
	
	public boolean getHibernation() {
		return hibernation;
	}
	
	public void setHibernation(boolean hibernation) {
		this.hibernation = hibernation;
	}
	
	public double getTemperature() {
		return temperature;
	}
	
	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}
	
	public boolean customTemp() {
		if (temp_now >= temperature * 0.7) {
			temp_now = 0.9 * temperature;
			return false;
		}
		else {
			temp_now = temperature;
			return true;
		}
	}
	
	public double Volume() {
		return length * 1350;
	}
}
