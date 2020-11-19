

public class Square extends Rectangle{
	Square(){
		super();
	}
	
	Square(double side){
		super(side, side);
	}
	
	Square(double side, String color, boolean filled){
		super(side, side, color, filled);
	}
	
	public double getSide(){
		return super.getLength();
	}
	
	public void setLength(double length) {
		super.setLength(length);
	}
	
	public void setWidth(double width) {
		super.setWidth(width);
	}
	
	public void setSide(double side) {
		this.setLength(side);
		this.setWidth(side);
	}
	
	public String toString() {
		return "Square[" + super.toString() + "]";
	}
}
