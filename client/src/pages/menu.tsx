import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DishCard from "@/components/dish-card";
import type { MenuItem } from "@shared/schema";

const categories = [
  { id: "chef-special", label: "Chef Special" },
  { id: "starters", label: "Starters" },
  { id: "soups", label: "Soups" },
  { id: "mains", label: "Main Course" },
  { id: "rice-biryani", label: "Rice & Biryani" },
  { id: "bread", label: "Bread" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
  { id: "combos", label: "Combos" },
];

const filterTypes = [
  { id: "all", label: "All", color: "var(--royal-gold)" },
  { id: "veg", label: "Veg", color: "var(--royal-emerald)" },
  { id: "non-veg", label: "Non-Veg", color: "var(--royal-maroon)" },
];

export default function Menu() {
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState("chef-special");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu-items"],
  });

  const { data: cartItems = [] } = useQuery({
    queryKey: ["/api/cart"],
  });

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const matchesFilter = filterType === "all" ||
        (filterType === "veg" && item.isVeg) ||
        (filterType === "non-veg" && !item.isVeg);
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesFilter && matchesSearch;
    });
  }, [menuItems, activeCategory, filterType, searchQuery]);

  const cartItemCount = cartItems.length;

  const currentFilter = filterTypes.find(f => f.id === filterType);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--elegant-cream)' }}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b elegant-shadow"
        style={{ borderColor: 'var(--elegant-light-gray)' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLocation("/")}
                className="hover:bg-transparent"
                style={{ color: 'var(--elegant-gold)' }}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <h1 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: 'var(--elegant-gold)' }}>
                Maharaja Feast
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar with Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full">
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search royal dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border-2 border-gray-300 focus-visible:ring-2 focus-visible:ring-yellow-400/50 h-14 text-lg font-sans pr-36 pl-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ color: 'var(--elegant-black)' }}
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </div>

              {/* Filter Button */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20">
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowFilterDropdown(!showFilterDropdown);
                  }}
                  className="bg-white border-2 border-gray-300 hover:border-yellow-400 focus-visible:ring-2 focus-visible:ring-yellow-400/50 h-10 px-4 text-sm font-serif font-semibold flex items-center gap-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ color: 'var(--elegant-black)' }}
                >
                  <SlidersHorizontal className="h-4 w-4 text-gray-400" />
                  {currentFilter?.id !== "all" && (
                    <div
                      className="w-2.5 h-2.5 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: currentFilter?.id === "veg" ? "#22c55e" : "#ef4444" }}
                    />
                  )}
                  {currentFilter?.label}
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </Button>

                {/* Filter Dropdown */}
                {showFilterDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white border-2 border-gray-300 rounded-2xl shadow-xl z-50 overflow-hidden"
                  >
                    {filterTypes.map((type, index) => (
                      <button
                        key={type.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setFilterType(type.id);
                          setShowFilterDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 font-serif font-semibold transition-all duration-200 ${filterType === type.id ? 'bg-gray-100' : ''
                          } ${index === 0 ? 'rounded-t-2xl' : ''} ${index === filterTypes.length - 1 ? 'rounded-b-2xl' : ''}`}
                        style={{ color: 'var(--elegant-black)' }}
                      >
                        {type.id !== "all" && (
                          <div
                            className="w-3 h-3 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: type.id === "veg" ? "#22c55e" : "#ef4444" }}
                          />
                        )}
                        {type.id === "all" && (
                          <div className="w-3 h-3 rounded-full bg-gray-400 border border-white shadow-sm" />
                        )}
                        {type.label}
                        {filterType === type.id && (
                          <div className="ml-auto">
                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="container mx-auto px-4 mb-10">
        <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <Button
                variant="outline"
                onClick={() => setActiveCategory(category.id)}
                className={`bg-white border-2 font-serif font-bold transition-all duration-300 px-6 py-3 text-black hover:scale-102 whitespace-nowrap ${activeCategory === category.id ? 'shadow-lg scale-105' : ''
                  }`}
                style={{
                  borderColor: activeCategory === category.id ? 'var(--elegant-gold)' : 'var(--elegant-light-gray)',
                  backgroundColor: 'white'
                }}
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="container mx-auto px-4 pb-12">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="relative mx-auto w-16 h-16 mb-8">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300"></div>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent absolute top-0 left-0" style={{ borderColor: 'var(--elegant-gold)' }}></div>
            </div>
            <p className="font-sans text-2xl" style={{ color: 'var(--elegant-gray)' }}>Loading royal delicacies...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl p-12 max-w-md mx-auto elegant-shadow">
              <p className="font-serif text-2xl mb-4" style={{ color: 'var(--elegant-gold)' }}>No Royal Dishes Found</p>
              <p className="font-sans text-lg" style={{ color: 'var(--elegant-gray)' }}>Try adjusting your search or filters</p>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <DishCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {showFilterDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowFilterDropdown(false)}
        />
      )}
    </div>
  );
}