import { useState } from "react";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("Best air purifiers under ₹10k");

  const mockResults = [
    {
      id: 1,
      name: "Philips AC1215/20 Air Purifier",
      price: "₹8,999",
      image: "/placeholder.svg",
      sponsored: true,
      explanation: "Why this? Based on your budget under ₹10k and need for effective air purification, this is a top-rated match with HEPA filter and compact design perfect for medium rooms."
    },
    {
      id: 2,
      name: "Mi Air Purifier 3",
      price: "₹9,499",
      image: "/placeholder.svg",
      sponsored: false,
      explanation: "Why this? Excellent value with smart features and app control. Perfect size for your budget with proven performance in Indian conditions."
    },
    {
      id: 3,
      name: "Honeywell Air Touch A5 Air Purifier",
      price: "₹9,999",
      image: "/placeholder.svg",
      sponsored: false,
      explanation: "Why this? Top choice for allergen removal with pre-filter + HEPA combo. Just at your budget limit but offers professional-grade filtration."
    },
    {
      id: 4,
      name: "Coway Sleek Pro AP-1009 Air Purifier",
      price: "₹7,899",
      image: "/placeholder.svg",
      sponsored: true,
      explanation: "Why this? Under budget with Korean technology and whisper-quiet operation. Great for bedrooms with proven dust and odor removal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sticky Search Bar */}
      <div className="sticky top-16 glass-card border-b border-border z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="What are you looking to buy today?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-12 text-base rounded-xl modern-input"
            />
            <Button 
              size="sm" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg glow-effect"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-muted-foreground">
            Found {mockResults.length} AI-recommended products
          </p>
        </div>

        <div className="space-y-6">
          {mockResults.map((product) => (
            <div key={product.id} className="product-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">
                        {product.name}
                      </h3>
                      {product.sponsored && (
                        <span className="sponsored-badge">Sponsored</span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold gradient-text">
                        {product.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.explanation}
                  </p>
                  
                  <Button 
                    className="rounded-lg glow-effect"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-xl">
            Load More Results
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;