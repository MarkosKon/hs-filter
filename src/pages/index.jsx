import React, {
  useState, useEffect, useContext, useRef, useMemo,
} from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import sortBy from 'lodash.sortby';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  initializeOperationsG,
  equals,
  notEquals,
  greaterThan,
  lessThan,
  includes,
  notIncludes,
  isIncludedIn,
  notIncludedIn,
  match,
  notMatch,
  matchCaseSensitive,
  isEven,
  isOdd,
  isNull,
  isNotNull,
} from 'compare-object-field';
import AddModal from '../components/AddModal';
import SaveLoadPresetModal from '../components/SaveLoadPresetModal';
import { ParentFilterGroup } from '../components/FilterGroup';
import Cards from '../components/Cards';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import { LiveFilterContext } from '../context/live-filter-context';
// import Debug from "../components/Debug";

const operations = {
  equals,
  'not equals': notEquals,
  'greater than': greaterThan,
  'less than': lessThan,
  includes,
  'not includes': notIncludes,
  'is included in': isIncludedIn,
  'not included in': notIncludedIn,
  match,
  'not match': notMatch,
  'match case-sensitive': matchCaseSensitive,
  'is even': isEven,
  'is odd': isOdd,
  'is null': isNull,
  'is not null': isNotNull,
};
const addFilterGroup = initializeOperationsG(operations);
const getCards = ({ cards, liveFilterGroup }) => {
  const satisfiesFilterGroup = addFilterGroup(liveFilterGroup);
  const result = cards.filter(satisfiesFilterGroup);
  return sortBy(result, ['cost', 'name']);
};

const AppPage = ({ data }) => {
  const {
    liveFilterGroup: { liveFilterGroup },
  } = useContext(LiveFilterContext);

  const cards = useMemo(() => {
    const expansions = data.allCardsJson.edges;
    return expansions.reduce((allCards, ex) => allCards.concat(ex.node.cards), []);
  }, [data.allCardsJson.edges]);

  // QUESTION: Why we get an unhandled exception (the try block is skipped (useEffect),
  // and the state re-initializes) if we try an incorrect DIY filter like
  // cardClass match whatever and we don't initialize lazily the state?
  // e.g. const [filteredCards, setFilteredCards] = useState(getCards({ cards, liveFilterGroup }));
  const [filteredCards, setFilteredCards] = useState(() => getCards({ cards, liveFilterGroup }));

  const errorToast = useRef();

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modalInitiator, setModalInitiator] = useState({});
  const [saveLoadPresetModal, setSaveLoadPresetModal] = useState(false);

  // show cards.
  useEffect(() => {
    try {
      setFilteredCards(getCards({ cards, liveFilterGroup }));
    } catch (err) {
      if (!toast.isActive(errorToast.current)) {
        errorToast.current = toast.error(
          `🔥 This is not supported, try something different. ${err.toString()}`,
        );
      }
    }
  }, [cards, liveFilterGroup]);
  return (
    <Layout>
      <SEO />
      {/* <Debug title="Current">
            {liveFilterGroup}
          </Debug> */}
      <ParentFilterGroup
        allCards={cards}
        filterGroup={liveFilterGroup}
        openModal={(initiator) => {
          setModalInitiator(initiator);
          setAddModalOpen(true);
        }}
        openGroupModal={() => setSaveLoadPresetModal(true)}
      />
      <ToastContainer draggablePercent={20} />
      <Cards cards={filteredCards} />
      <AddModal
        isOpen={addModalOpen}
        modalInitiator={modalInitiator}
        onRequestClose={() => setAddModalOpen(false)}
      />
      <SaveLoadPresetModal
        isOpen={saveLoadPresetModal}
        onRequestClose={() => setSaveLoadPresetModal(false)}
      />
    </Layout>
  );
};

AppPage.propTypes = {
  data: PropTypes.shape({
    allCardsJson: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
  query appPage {
    allCardsJson {
      edges {
        node {
          cards {
            image {
              childImageSharp {
                fluid(maxWidth: 230, srcSetBreakpoints: [230], sizes: "230px") {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            name
            artist
            attack
            cardClass
            collectible
            cost
            dbfId
            faction
            flavor
            health
            howToEarnGolden
            id
            mechanics
            rarity
            set
            rating
            text
            type
            race
            extra
            tile
            howToEarn
            playRequirements {
              REQ_ENEMY_TARGET
              REQ_MINION_TARGET
              REQ_NUM_MINION_SLOTS
              REQ_TARGET_TO_PLAY
              REQ_TARGET_IF_AVAILABLE
              REQ_FRIENDLY_TARGET
              REQ_UNDAMAGED_TARGET
              REQ_WEAPON_EQUIPPED
              REQ_DAMAGED_TARGET
              REQ_MINIMUM_ENEMY_MINIONS
              REQ_NONSELF_TARGET
              REQ_TARGET_MAX_ATTACK
              REQ_TARGET_WITH_RACE
              REQ_TARGET_MIN_ATTACK
              REQ_FRIENDLY_MINION_DIED_THIS_GAME
              REQ_LEGENDARY_TARGET
              REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND
              REQ_MUST_TARGET_TAUNTER
              REQ_TARGET_FOR_COMBO
              REQ_MINIMUM_TOTAL_MINIONS
              REQ_HERO_TARGET
              REQ_TARGET_WITH_DEATHRATTLE
              REQ_TARGET_IF_AVAILABE_AND_ELEMENTAL_PLAYED_LAST_TURN
              REQ_SECRET_ZONE_CAP_FOR_NON_SECRET
              REQ_FROZEN_TARGET
              REQ_TARGET_IF_AVAILABLE_AND_NO_3_COST_CARD_IN_DECK
              REQ_STEALTHED_TARGET
              REQ_MINION_SLOT_OR_MANA_CRYSTAL_SLOT
              REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_SECRETS
              REQ_TARGET_IF_AVAILABLE_AND_HERO_HAS_ATTACK
              REQ_FRIENDLY_MINION_OF_RACE_IN_HAND
              REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_SPELLS_PLAYED_THIS_TURN
              REQ_FRIENDLY_MINION_OF_RACE_DIED_THIS_TURN
              REQ_FRIENDLY_MINIONS_OF_RACE_DIED_THIS_GAME
              REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_MINIONS
              REQ_DRAG_TO_PLAY
              REQ_CANNOT_PLAY_THIS
            }
            referencedTags
            targetingArrowText
            durability
            spellDamage
            entourage
            overload
            elite
            armor
            collectionText
            classes
            multiClassGroup
            hideStats
          }
        }
      }
    }
  }
`;

export default AppPage;
