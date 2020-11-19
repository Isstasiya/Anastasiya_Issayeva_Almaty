

public class figures {
	public static void main(String[] args) {
		Regular_quadrilateral square = new Regular_quadrilateral();
		System.out.println(square.perimeter());
		Regular_quadrilateral paral = new Regular_quadrilateral(3.5, 4, 3.5, 4, 2.7, "parallelogram");
		paral.sides();
		Regular_quadrilateral trapezoid = new Regular_quadrilateral(2, 3, 5, 8, 1.7, "trapezoid");
		System.out.println(trapezoid.area());
		
	}
}