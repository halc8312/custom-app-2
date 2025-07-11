'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Search.module.css'
import { searchContent } from '@/lib/search'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    const searchTimer = setTimeout(() => {
      const searchResults = searchContent(query)
      setResults(searchResults)
      setIsOpen(searchResults.length > 0)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(searchTimer)
  }, [query])

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <div className={styles.searchBox}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="検索..."
          className={styles.searchInput}
          aria-label="サイト内検索"
        />
        {query && (
          <button
            onClick={handleClear}
            className={styles.clearButton}
            aria-label="検索をクリア"
          >
            ✕
          </button>
        )}
        <button className={styles.searchButton} aria-label="検索">
          🔍
        </button>
      </div>

      {isOpen && (
        <div className={styles.searchResults}>
          {isLoading ? (
            <div className={styles.loading}>検索中...</div>
          ) : (
            <>
              <div className={styles.resultsHeader}>
                検索結果: {results.length}件
              </div>
              <ul className={styles.resultsList}>
                {results.map((result, index) => (
                  <li key={index}>
                    <Link
                      href={result.href}
                      className={styles.resultItem}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={styles.resultCategory}>
                        {result.category}
                      </div>
                      <div className={styles.resultTitle}>{result.title}</div>
                      <div className={styles.resultDescription}>
                        {result.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
