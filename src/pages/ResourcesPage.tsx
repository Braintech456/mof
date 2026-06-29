import { useState } from 'react';
import { Download, FileText, Search } from 'lucide-react';
import { Container, Section, Button, Input, Select, Card } from '../components/ui';
import { olympiads } from '../data/siteData';

const resources = [
  {
    id: 1,
    title: 'Mathematics Olympiad Sample Paper - Class 5',
    type: 'Sample Paper',
    olympiad: 'math',
    class: '5',
    size: '1.2 MB',
  },
  {
    id: 2,
    title: 'Science Olympiad Syllabus 2026-27',
    type: 'Syllabus',
    olympiad: 'science',
    class: 'All',
    size: '0.8 MB',
  },
  {
    id: 3,
    title: 'English Olympiad Previous Year Paper - Class 8',
    type: 'Previous Year',
    olympiad: 'english',
    class: '8',
    size: '1.5 MB',
  },
  {
    id: 4,
    title: 'General Knowledge Preparation Guide',
    type: 'Preparation Guide',
    olympiad: 'gk',
    class: 'All',
    size: '2.1 MB',
  },
  {
    id: 5,
    title: 'Computer Olympiad Sample Paper - Class 10',
    type: 'Sample Paper',
    olympiad: 'computer',
    class: '10',
    size: '1.0 MB',
  },
  {
    id: 6,
    title: 'Art Olympiad Portfolio Guidelines',
    type: 'Guidelines',
    olympiad: 'art',
    class: 'All',
    size: '3.2 MB',
  },
];

const types = ['All', 'Sample Paper', 'Syllabus', 'Previous Year', 'Preparation Guide', 'Guidelines'];
const classes = ['All', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [selectedOlympiad, setSelectedOlympiad] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');

  const filteredResources = resources.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesOlympiad = selectedOlympiad === 'All' || r.olympiad === selectedOlympiad;
    const matchesType = selectedType === 'All' || r.type === selectedType;
    const matchesClass = selectedClass === 'All' || r.class === selectedClass || r.class === 'All';
    return matchesSearch && matchesOlympiad && matchesType && matchesClass;
  });

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <FileText className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Resources
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Download sample papers, syllabi, preparation guides, and previous year
            question papers for all Olympiads.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-ink-50 dark:bg-navy-800 p-6 rounded mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>

            <Select
              options={[{ value: 'All', label: 'All Olympiads' }, ...olympiads.map((o) => ({ value: o.id, label: o.name }))]}
              value={selectedOlympiad}
              onChange={(e) => setSelectedOlympiad(e.target.value)}
              placeholder="Olympiad"
            />

            <Select
              options={types.map((t) => ({ value: t, label: t }))}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              placeholder="Resource Type"
            />

            <Select
              options={classes.map((c) => ({ value: c, label: c === 'All' ? 'All Classes' : `Class ${c}` }))}
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              placeholder="Class"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-ink-400 dark:text-ink-300 mb-6">
          Showing {filteredResources.length} of {resources.length} resources
        </p>

        {/* Resource List */}
        {filteredResources.length === 0 ? (
          <Card className="text-center p-8">
            <p className="text-ink dark:text-ink-200">
              No resources found matching your filters.
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredResources.map((resource) => {
              const olympiad = olympiads.find((o) => o.id === resource.olympiad);
              return (
                <Card key={resource.id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${olympiad?.color || 'bg-navy'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-navy dark:text-white">
                        {resource.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-ink-400 dark:text-ink-300 mt-1">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>Class {resource.class}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}
