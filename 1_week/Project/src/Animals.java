
public abstract class Animals {
	protected double weight;
	protected double size;
	protected String type;
	protected boolean predator;
	
	Animals(){
		weight = 100;
		size = 10;
		this.type = "sceleton";
	}
	
	Animals(double weight, double size, boolean predator, String type){
		this.weight = weight;
		this.size = size;
		this.type = type;
		this.predator = predator;
	}
	
	public double getWeight() {
		return weight;
	}
	
	public void setWeight(double weight) {
		this.weight = weight;
	}
	
	public double getSize() {
		return size;
	}
	
	public void setSize(double size) {
		this.size = size;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public boolean getPredator() {
		return predator;
	}
	
	public void setPredator(boolean predator) {
		this.predator = predator;
	}
	
	public boolean withWhom(Animals first){
		if ((this.predator == true && first.predator == false) || (this.predator == false && first.predator == true)) {
			return false;
		}
		else {
			return true;
		}
	}
}