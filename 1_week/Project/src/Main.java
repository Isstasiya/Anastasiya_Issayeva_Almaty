
public class Main {
	
	public static void main(String[] args) {
		Fish f = new Fish(100, 10, true, "kingfish", true, 4 );
        Reptiles r = new Reptiles(300, 20, false, "gecko", true, 15, true, 15);
        Reptiles k = new Reptiles(300, 20, false, "gecko", true, 20, true, 15);
        Store s = new Store();
        for(int i = 0; i < 4; i++) {
        	System.out.println(f.Feed());
        }
        for(int i = 0; i < 5; i++) {
        	System.out.println(r.customTemp());
        }
        System.out.println(r.Volume());
        System.out.println(k.Volume());
        System.out.println(f.getLifespan());
        f.setPredator(false);
        System.out.println(f.getPredator());
        System.out.println(s.price(7, "kingfish"));
        System.out.println(s.price(10, "gecko"));
	}
}
