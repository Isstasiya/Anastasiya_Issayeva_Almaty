
public class Fish extends Animals {
	
	protected double lifespan;
	protected boolean feed;
	protected int n;
	
	Fish(){
		feed = false;
		this.lifespan = 4;
		n = 0;
	}
	
	Fish(double weight, double size, boolean predator, String type, boolean feed, double lifespan){
		super(weight, size, predator, type);
		this.lifespan = lifespan;
		this.feed = feed;
	}
	
	public double getLifespan() {
		return lifespan;
	}
	
	public void setLifespan(double lifespan) {
		this.lifespan = lifespan;
	}
	
	public boolean getFeed() {
		return feed;
	}
	
	public void setFeed(boolean feed){
		this.feed = feed;
	}
	
	public boolean Feed() {
		if (!feed) {
			n = 0;
			feed = true;
			return true;
		}
		else{
			n ++;
			if (n == 2) feed = false;
			return false;
		}
	}
}
