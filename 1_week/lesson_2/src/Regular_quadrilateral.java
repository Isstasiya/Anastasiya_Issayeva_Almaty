package lesson_2;

public class Regular_quadrilateral {
	private double a1;
	private double a2;
	private double a3;
	private double a4;
	private double h;
	private String figure;
	Regular_quadrilateral(){
		a1 = a2 = a3 = a4 = h = 1;
		figure = "square";
	}
	Regular_quadrilateral(double a1, double a2, double a3, double a4, double h, String figure){
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
		this.h = h;
		this.figure = figure;
	}
	public double perimeter() {
		return (a1 + a2 + a3 + a4);
	}
	public void sides() {
		System.out.println("1 side:" + a1 + "\n2 side:" + a2 + "\n3 side:" + a3 + "\n4 side:" + a4);
	}
	public double area() {
		switch(figure) {
		case "square": return (Math.pow(a1, 2));
		case "parallelogram": return(a1 * h);
		case "rectangle": return (a1 * a2);
		case "rhombus": return(a1 * h);
		case "trapezoid": return (0.5 * (a2 + a4));
		default: System.out.println("I can't determine the area");return(0);
		}
	}
}
