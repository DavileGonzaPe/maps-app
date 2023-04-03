import { defineComponent, ref, computed } from 'vue';
import SearchResults from '@/components/search-result/SearchResults.vue';

export default defineComponent ({
    name: 'SearchBar',
    components: { SearchResults },
    setup() {

        const debounceTimeout = ref();
        const debounceValue = ref('');

        return {
            debounceValue,
            searchTerm: computed({
                get() {
                    return debounceValue.value;
                },
                set( val: string ) {
                    if ( debounceValue.value ) {
                        clearTimeout( debounceTimeout.value );
                    }
                    debounceTimeout.value = setTimeout(() => {
                        debounceValue.value = val;
                    }, 2000);
                }

            })
        }
    }
});