import { useState } from 'react';
import { Search, FileText, AlertCircle, Award } from 'lucide-react';
import { Container, Section, Button, Input, Card, Spinner, Select } from '../components/ui';
import { supabase } from '../lib/supabase';
import { olympiads } from '../data/siteData';

interface ResultData {
  id: string;
  student_name: string;
  school_name: string;
  olympiad_name: string;
  class: string;
  district: string;
  score: number;
  rank: string;
  certificate_id: string;
  issue_date: string;
}

type SearchType = 'roll' | 'certificate';

export default function ResultsPage() {
  const [searchType, setSearchType] = useState<SearchType>('roll');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOlympiad, setSelectedOlympiad] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setResult(null);
    setNotFound(false);

    try {
      let query = supabase.from('results').select('*');

      if (searchType === 'roll') {
        query = query
          .eq('id', searchTerm.trim().toUpperCase())
          .eq('olympiad_id', selectedOlympiad);
      } else {
        query = query.eq('certificate_id', searchTerm.trim().toUpperCase());
      }

      const { data, error } = await query.single();

      if (data && !error) {
        setResult({
          id: data.id,
          student_name: data.student_name,
          school_name: data.school_name,
          olympiad_name: data.olympiad_name,
          class: data.class,
          district: data.district,
          score: data.score,
          rank: data.rank,
          certificate_id: data.certificate_id,
          issue_date: data.issue_date,
        });
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <FileText className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Olympiad Results
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Check your Olympiad results. Select your search method and enter
            the required details.
          </p>
        </div>

        {/* Search Type Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => {
              setSearchType('roll');
              setResult(null);
              setNotFound(false);
            }}
            className={`px-6 py-3 rounded font-sans font-medium text-sm transition-colors ${
              searchType === 'roll'
                ? 'bg-navy text-white'
                : 'bg-ink-100 dark:bg-navy-700 text-ink dark:text-white hover:bg-ink-200 dark:hover:bg-navy-600'
            }`}
          >
            Search by Roll Number
          </button>
          <button
            onClick={() => {
              setSearchType('certificate');
              setResult(null);
              setNotFound(false);
            }}
            className={`px-6 py-3 rounded font-sans font-medium text-sm transition-colors ${
              searchType === 'certificate'
                ? 'bg-navy text-white'
                : 'bg-ink-100 dark:bg-navy-700 text-ink dark:text-white hover:bg-ink-200 dark:hover:bg-navy-600'
            }`}
          >
            Search by Certificate ID
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
          <div className="space-y-4">
            {searchType === 'roll' && (
              <Select
                label="Select Olympiad"
                options={olympiads.map((o) => ({
                  value: o.id,
                  label: o.name,
                }))}
                value={selectedOlympiad}
                onChange={(e) => setSelectedOlympiad(e.target.value)}
                placeholder="Choose an Olympiad"
              />
            )}
            <Input
              label={
                searchType === 'roll'
                  ? 'Roll Number'
                  : 'Certificate ID'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
              placeholder={
                searchType === 'roll'
                  ? 'Enter your roll number'
                  : 'Enter certificate ID'
              }
            />
            <Button
              type="submit"
              className="w-full"
              disabled={
                loading || !searchTerm.trim() || (searchType === 'roll' && !selectedOlympiad)
              }
            >
              {loading ? (
                <Spinner size="sm" className="text-white" />
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Search Results
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Spinner size="lg" className="mx-auto text-navy dark:text-white" />
            <p className="mt-4 text-ink dark:text-ink-200">Searching...</p>
          </div>
        )}

        {/* Result Card */}
        {result && !loading && (
          <div className="max-w-2xl mx-auto">
            {/* Official Marksheet Style */}
            <Card className="overflow-hidden" padding="none">
              {/* Header */}
              <div className="bg-navy text-white p-6 text-center">
                <h2 className="font-serif text-xl font-bold mb-1">
                  Maharashtra Olympiad Foundation
                </h2>
                <p className="text-sm text-white/70">Official Result Statement</p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      Student Name
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white text-lg">
                      {result.student_name}
                    </p>
                  </div>
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      School
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {result.school_name}
                    </p>
                  </div>
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      Olympiad
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {result.olympiad_name}
                    </p>
                  </div>
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      Class
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {result.class}
                    </p>
                  </div>
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      District
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {result.district}
                    </p>
                  </div>
                  <div className="border-b border-dashed border-ink-200 dark:border-navy-600 pb-4 md:pb-4">
                    <p className="text-xs text-ink-400 uppercase tracking-wide">
                      Score Obtained
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white text-xl">
                      {result.score} / 50
                    </p>
                  </div>
                </div>

                {/* Rank Badge */}
                <div className="mt-6 p-4 bg-navy text-white rounded flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wide">
                      State Rank
                    </p>
                    <p className="font-serif font-bold text-3xl text-gold">
                      {result.rank}
                    </p>
                  </div>
                  <Award className="w-12 h-12 text-gold/50" />
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-ink-200 dark:border-navy-600 flex flex-wrap justify-between gap-4 text-sm text-ink-400">
                  <div>
                    <p>Roll No: {result.id}</p>
                    <p>Certificate ID: {result.certificate_id}</p>
                  </div>
                  <div className="text-right">
                    <p>Result Date: {new Date(result.issue_date).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Not Found */}
        {notFound && !loading && (
          <Card className="max-w-lg mx-auto text-center p-8">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-ink-300" />
            <h3 className="font-serif font-bold text-xl text-navy dark:text-white mb-2">
              Result Not Found
            </h3>
            <p className="text-ink dark:text-ink-200 text-sm">
              No result found for the provided details. Please verify your
              information and try again. If the problem persists, contact
              your school coordinator or MOF support.
            </p>
          </Card>
        )}
      </Container>
    </Section>
  );
}
